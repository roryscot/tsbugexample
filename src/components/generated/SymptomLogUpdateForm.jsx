/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSymptomLog } from "./graphql/queries";
import { updateSymptomLog } from "./graphql/mutations";
const client = generateClient();
export default function SymptomLogUpdateForm(props) {
  const {
    id: idProp,
    symptomLog: symptomLogModelProp,
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
    date: "",
    symptom: "",
    severity: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [date, setDate] = React.useState(initialValues.date);
  const [symptom, setSymptom] = React.useState(initialValues.symptom);
  const [severity, setSeverity] = React.useState(initialValues.severity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = symptomLogRecord
      ? { ...initialValues, ...symptomLogRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setDate(cleanValues.date);
    setSymptom(cleanValues.symptom);
    setSeverity(cleanValues.severity);
    setErrors({});
  };
  const [symptomLogRecord, setSymptomLogRecord] =
    React.useState(symptomLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSymptomLog.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSymptomLog
        : symptomLogModelProp;
      setSymptomLogRecord(record);
    };
    queryData();
  }, [idProp, symptomLogModelProp]);
  React.useEffect(resetStateValues, [symptomLogRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    date: [],
    symptom: [],
    severity: [],
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
          date: date ?? null,
          symptom: symptom ?? null,
          severity: severity ?? null,
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
            query: updateSymptomLog.replaceAll("__typename", ""),
            variables: {
              input: {
                id: symptomLogRecord.id,
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
      {...getOverrideProps(overrides, "SymptomLogUpdateForm")}
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
              date,
              symptom,
              severity,
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
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              date: value,
              symptom,
              severity,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Symptom"
        isRequired={false}
        isReadOnly={false}
        value={symptom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              date,
              symptom: value,
              severity,
            };
            const result = onChange(modelFields);
            value = result?.symptom ?? value;
          }
          if (errors.symptom?.hasError) {
            runValidationTasks("symptom", value);
          }
          setSymptom(value);
        }}
        onBlur={() => runValidationTasks("symptom", symptom)}
        errorMessage={errors.symptom?.errorMessage}
        hasError={errors.symptom?.hasError}
        {...getOverrideProps(overrides, "symptom")}
      ></TextField>
      <TextField
        label="Severity"
        isRequired={false}
        isReadOnly={false}
        value={severity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              date,
              symptom,
              severity: value,
            };
            const result = onChange(modelFields);
            value = result?.severity ?? value;
          }
          if (errors.severity?.hasError) {
            runValidationTasks("severity", value);
          }
          setSeverity(value);
        }}
        onBlur={() => runValidationTasks("severity", severity)}
        errorMessage={errors.severity?.errorMessage}
        hasError={errors.severity?.hasError}
        {...getOverrideProps(overrides, "severity")}
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
          isDisabled={!(idProp || symptomLogModelProp)}
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
              !(idProp || symptomLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
