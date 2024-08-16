/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createDataProtection } from "./graphql/mutations";
const client = generateClient();
export default function DataProtectionCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    setUuid(initialValues.uuid);
    setDataType(initialValues.dataType);
    setProtectionStatus(initialValues.protectionStatus);
    setErrors({});
  };
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
          dataType,
          protectionStatus,
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
            query: createDataProtection.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DataProtectionCreateForm")}
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
