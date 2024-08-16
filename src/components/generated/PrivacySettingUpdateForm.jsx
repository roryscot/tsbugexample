/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPrivacySetting } from "./graphql/queries";
import { updatePrivacySetting } from "./graphql/mutations";
const client = generateClient();
export default function PrivacySettingUpdateForm(props) {
  const {
    id: idProp,
    privacySetting: privacySettingModelProp,
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
    settingName: "",
    settingValue: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [settingName, setSettingName] = React.useState(
    initialValues.settingName
  );
  const [settingValue, setSettingValue] = React.useState(
    initialValues.settingValue
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = privacySettingRecord
      ? { ...initialValues, ...privacySettingRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setSettingName(cleanValues.settingName);
    setSettingValue(cleanValues.settingValue);
    setErrors({});
  };
  const [privacySettingRecord, setPrivacySettingRecord] = React.useState(
    privacySettingModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPrivacySetting.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPrivacySetting
        : privacySettingModelProp;
      setPrivacySettingRecord(record);
    };
    queryData();
  }, [idProp, privacySettingModelProp]);
  React.useEffect(resetStateValues, [privacySettingRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    settingName: [],
    settingValue: [],
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
          settingName: settingName ?? null,
          settingValue: settingValue ?? null,
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
            query: updatePrivacySetting.replaceAll("__typename", ""),
            variables: {
              input: {
                id: privacySettingRecord.id,
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
      {...getOverrideProps(overrides, "PrivacySettingUpdateForm")}
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
              settingName,
              settingValue,
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
        label="Setting name"
        isRequired={false}
        isReadOnly={false}
        value={settingName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              settingName: value,
              settingValue,
            };
            const result = onChange(modelFields);
            value = result?.settingName ?? value;
          }
          if (errors.settingName?.hasError) {
            runValidationTasks("settingName", value);
          }
          setSettingName(value);
        }}
        onBlur={() => runValidationTasks("settingName", settingName)}
        errorMessage={errors.settingName?.errorMessage}
        hasError={errors.settingName?.hasError}
        {...getOverrideProps(overrides, "settingName")}
      ></TextField>
      <TextField
        label="Setting value"
        isRequired={false}
        isReadOnly={false}
        value={settingValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              settingName,
              settingValue: value,
            };
            const result = onChange(modelFields);
            value = result?.settingValue ?? value;
          }
          if (errors.settingValue?.hasError) {
            runValidationTasks("settingValue", value);
          }
          setSettingValue(value);
        }}
        onBlur={() => runValidationTasks("settingValue", settingValue)}
        errorMessage={errors.settingValue?.errorMessage}
        hasError={errors.settingValue?.hasError}
        {...getOverrideProps(overrides, "settingValue")}
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
          isDisabled={!(idProp || privacySettingModelProp)}
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
              !(idProp || privacySettingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
