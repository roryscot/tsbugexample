/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getHealthGoal } from "./graphql/queries";
import { updateHealthGoal } from "./graphql/mutations";
const client = generateClient();
export default function HealthGoalUpdateForm(props) {
  const {
    id: idProp,
    healthGoal: healthGoalModelProp,
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
    const cleanValues = healthGoalRecord
      ? { ...initialValues, ...healthGoalRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setGoalName(cleanValues.goalName);
    setGoalDescription(cleanValues.goalDescription);
    setTargetDate(cleanValues.targetDate);
    setProgress(cleanValues.progress);
    setErrors({});
  };
  const [healthGoalRecord, setHealthGoalRecord] =
    React.useState(healthGoalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHealthGoal.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHealthGoal
        : healthGoalModelProp;
      setHealthGoalRecord(record);
    };
    queryData();
  }, [idProp, healthGoalModelProp]);
  React.useEffect(resetStateValues, [healthGoalRecord]);
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
          goalName: goalName ?? null,
          goalDescription: goalDescription ?? null,
          targetDate: targetDate ?? null,
          progress: progress ?? null,
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
            query: updateHealthGoal.replaceAll("__typename", ""),
            variables: {
              input: {
                id: healthGoalRecord.id,
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
      {...getOverrideProps(overrides, "HealthGoalUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || healthGoalModelProp)}
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
              !(idProp || healthGoalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
