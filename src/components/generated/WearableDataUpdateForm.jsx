/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getWearableData } from "./graphql/queries";
import { updateWearableData } from "./graphql/mutations";
const client = generateClient();
export default function WearableDataUpdateForm(props) {
  const {
    id: idProp,
    wearableData: wearableDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    uuid: "",
    deviceId: "",
    dataType: "",
    dataValue: "",
    timestamp: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [deviceId, setDeviceId] = React.useState(initialValues.deviceId);
  const [dataType, setDataType] = React.useState(initialValues.dataType);
  const [dataValue, setDataValue] = React.useState(initialValues.dataValue);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = wearableDataRecord
      ? { ...initialValues, ...wearableDataRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setDeviceId(cleanValues.deviceId);
    setDataType(cleanValues.dataType);
    setDataValue(
      typeof cleanValues.dataValue === "string" ||
        cleanValues.dataValue === null
        ? cleanValues.dataValue
        : JSON.stringify(cleanValues.dataValue)
    );
    setTimestamp(cleanValues.timestamp);
    setErrors({});
  };
  const [wearableDataRecord, setWearableDataRecord] = React.useState(
    wearableDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getWearableData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getWearableData
        : wearableDataModelProp;
      setWearableDataRecord(record);
    };
    queryData();
  }, [idProp, wearableDataModelProp]);
  React.useEffect(resetStateValues, [wearableDataRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    deviceId: [],
    dataType: [],
    dataValue: [{ type: "JSON" }],
    timestamp: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          uuid,
          deviceId: deviceId ?? null,
          dataType: dataType ?? null,
          dataValue: dataValue ?? null,
          timestamp: timestamp ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateWearableData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: wearableDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WearableDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Uuid"
        isRequired={true}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid: value,
              deviceId,
              dataType,
              dataValue,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <TextField
        label="Device id"
        isRequired={false}
        isReadOnly={false}
        value={deviceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              deviceId: value,
              dataType,
              dataValue,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.deviceId ?? value;
          }
          if (errors.deviceId?.hasError) {
            runValidationTasks("deviceId", value);
          }
          setDeviceId(value);
        }}
        onBlur={() => runValidationTasks("deviceId", deviceId)}
        errorMessage={errors.deviceId?.errorMessage}
        hasError={errors.deviceId?.hasError}
        {...getOverrideProps(overrides, "deviceId")}
      ></TextField>
      <TextField
        label="Data type"
        isRequired={false}
        isReadOnly={false}
        value={dataType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              deviceId,
              dataType: value,
              dataValue,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.dataType ?? value;
          }
          if (errors.dataType?.hasError) {
            runValidationTasks("dataType", value);
          }
          setDataType(value);
        }}
        onBlur={() => runValidationTasks("dataType", dataType)}
        errorMessage={errors.dataType?.errorMessage}
        hasError={errors.dataType?.hasError}
        {...getOverrideProps(overrides, "dataType")}
      ></TextField>
      <TextAreaField
        label="Data value"
        isRequired={false}
        isReadOnly={false}
        value={dataValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              deviceId,
              dataType,
              dataValue: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.dataValue ?? value;
          }
          if (errors.dataValue?.hasError) {
            runValidationTasks("dataValue", value);
          }
          setDataValue(value);
        }}
        onBlur={() => runValidationTasks("dataValue", dataValue)}
        errorMessage={errors.dataValue?.errorMessage}
        hasError={errors.dataValue?.hasError}
        {...getOverrideProps(overrides, "dataValue")}
      ></TextAreaField>
      <TextField
        label="Timestamp"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              uuid,
              deviceId,
              dataType,
              dataValue,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || wearableDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || wearableDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
