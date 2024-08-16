/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createHealthGoal } from "./graphql/mutations";
const client = generateClient();
export default function HealthGoalCreateForm(props) {
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
    goalName: "",
    goalDescription: "",
    targetDate: "",
    progress: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [goalName, setGoalName] = React.useState(initialValues.goalName);
  const [goalDescription, setGoalDescription] = React.useState(
    initialValues.goalDescription
  );
  const [targetDate, setTargetDate] = React.useState(initialValues.targetDate);
  const [progress, setProgress] = React.useState(initialValues.progress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUuid(initialValues.uuid);
    setGoalName(initialValues.goalName);
    setGoalDescription(initialValues.goalDescription);
    setTargetDate(initialValues.targetDate);
    setProgress(initialValues.progress);
    setErrors({});
  };
  const validations = {
    uuid: [{ type: "Required" }],
    goalName: [],
    goalDescription: [],
    targetDate: [],
    progress: [],
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
          goalName,
          goalDescription,
          targetDate,
          progress,
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
            query: createHealthGoal.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "HealthGoalCreateForm")}
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
              goalName,
              goalDescription,
              targetDate,
              progress,
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
        label="Goal name"
        isRequired={false}
        isReadOnly={false}
        value={goalName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              goalName: value,
              goalDescription,
              targetDate,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.goalName ?? value;
          }
          if (errors.goalName?.hasError) {
            runValidationTasks("goalName", value);
          }
          setGoalName(value);
        }}
        onBlur={() => runValidationTasks("goalName", goalName)}
        errorMessage={errors.goalName?.errorMessage}
        hasError={errors.goalName?.hasError}
        {...getOverrideProps(overrides, "goalName")}
      ></TextField>
      <TextField
        label="Goal description"
        isRequired={false}
        isReadOnly={false}
        value={goalDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              goalName,
              goalDescription: value,
              targetDate,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.goalDescription ?? value;
          }
          if (errors.goalDescription?.hasError) {
            runValidationTasks("goalDescription", value);
          }
          setGoalDescription(value);
        }}
        onBlur={() => runValidationTasks("goalDescription", goalDescription)}
        errorMessage={errors.goalDescription?.errorMessage}
        hasError={errors.goalDescription?.hasError}
        {...getOverrideProps(overrides, "goalDescription")}
      ></TextField>
      <TextField
        label="Target date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={targetDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              goalName,
              goalDescription,
              targetDate: value,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.targetDate ?? value;
          }
          if (errors.targetDate?.hasError) {
            runValidationTasks("targetDate", value);
          }
          setTargetDate(value);
        }}
        onBlur={() => runValidationTasks("targetDate", targetDate)}
        errorMessage={errors.targetDate?.errorMessage}
        hasError={errors.targetDate?.hasError}
        {...getOverrideProps(overrides, "targetDate")}
      ></TextField>
      <TextField
        label="Progress"
        isRequired={false}
        isReadOnly={false}
        value={progress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              goalName,
              goalDescription,
              targetDate,
              progress: value,
            };
            const result = onChange(modelFields);
            value = result?.progress ?? value;
          }
          if (errors.progress?.hasError) {
            runValidationTasks("progress", value);
          }
          setProgress(value);
        }}
        onBlur={() => runValidationTasks("progress", progress)}
        errorMessage={errors.progress?.errorMessage}
        hasError={errors.progress?.hasError}
        {...getOverrideProps(overrides, "progress")}
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
