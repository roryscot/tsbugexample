/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDataProtection } from "./graphql/queries";
import { updateDataProtection } from "./graphql/mutations";
const client = generateClient();
export default function DataProtectionUpdateForm(props) {
  const {
    id: idProp,
    dataProtection: dataProtectionModelProp,
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
    dataType: "",
    protectionStatus: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [dataType, setDataType] = React.useState(initialValues.dataType);
  const [protectionStatus, setProtectionStatus] = React.useState(
    initialValues.protectionStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dataProtectionRecord
      ? { ...initialValues, ...dataProtectionRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setDataType(cleanValues.dataType);
    setProtectionStatus(cleanValues.protectionStatus);
    setErrors({});
  };
  const [dataProtectionRecord, setDataProtectionRecord] = React.useState(
    dataProtectionModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDataProtection.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDataProtection
        : dataProtectionModelProp;
      setDataProtectionRecord(record);
    };
    queryData();
  }, [idProp, dataProtectionModelProp]);
  React.useEffect(resetStateValues, [dataProtectionRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    dataType: [],
    protectionStatus: [],
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
          dataType: dataType ?? null,
          protectionStatus: protectionStatus ?? null,
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
            query: updateDataProtection.replaceAll("__typename", ""),
            variables: {
              input: {
                id: dataProtectionRecord.id,
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
      {...getOverrideProps(overrides, "DataProtectionUpdateForm")}
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
              dataType,
              protectionStatus,
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
        label="Data type"
        isRequired={false}
        isReadOnly={false}
        value={dataType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              dataType: value,
              protectionStatus,
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
      <TextField
        label="Protection status"
        isRequired={false}
        isReadOnly={false}
        value={protectionStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              dataType,
              protectionStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.protectionStatus ?? value;
          }
          if (errors.protectionStatus?.hasError) {
            runValidationTasks("protectionStatus", value);
          }
          setProtectionStatus(value);
        }}
        onBlur={() => runValidationTasks("protectionStatus", protectionStatus)}
        errorMessage={errors.protectionStatus?.errorMessage}
        hasError={errors.protectionStatus?.hasError}
        {...getOverrideProps(overrides, "protectionStatus")}
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
          isDisabled={!(idProp || dataProtectionModelProp)}
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
              !(idProp || dataProtectionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
