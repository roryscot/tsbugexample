/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMedicationLog } from "./graphql/mutations";
const client = generateClient();
export default function MedicationLogCreateForm(props) {
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
    medicationName: "",
    dose: "",
    startDate: "",
    endDate: "",
    notes: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [medicationName, setMedicationName] = React.useState(
    initialValues.medicationName
  );
  const [dose, setDose] = React.useState(initialValues.dose);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUuid(initialValues.uuid);
    setMedicationName(initialValues.medicationName);
    setDose(initialValues.dose);
    setStartDate(initialValues.startDate);
    setEndDate(initialValues.endDate);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    uuid: [{ type: "Required" }],
    medicationName: [],
    dose: [],
    startDate: [],
    endDate: [],
    notes: [],
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
          medicationName,
          dose,
          startDate,
          endDate,
          notes,
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
            query: createMedicationLog.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MedicationLogCreateForm")}
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
              medicationName,
              dose,
              startDate,
              endDate,
              notes,
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
        label="Medication name"
        isRequired={false}
        isReadOnly={false}
        value={medicationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              medicationName: value,
              dose,
              startDate,
              endDate,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.medicationName ?? value;
          }
          if (errors.medicationName?.hasError) {
            runValidationTasks("medicationName", value);
          }
          setMedicationName(value);
        }}
        onBlur={() => runValidationTasks("medicationName", medicationName)}
        errorMessage={errors.medicationName?.errorMessage}
        hasError={errors.medicationName?.hasError}
        {...getOverrideProps(overrides, "medicationName")}
      ></TextField>
      <TextField
        label="Dose"
        isRequired={false}
        isReadOnly={false}
        value={dose}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              medicationName,
              dose: value,
              startDate,
              endDate,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.dose ?? value;
          }
          if (errors.dose?.hasError) {
            runValidationTasks("dose", value);
          }
          setDose(value);
        }}
        onBlur={() => runValidationTasks("dose", dose)}
        errorMessage={errors.dose?.errorMessage}
        hasError={errors.dose?.hasError}
        {...getOverrideProps(overrides, "dose")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              medicationName,
              dose,
              startDate: value,
              endDate,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              medicationName,
              dose,
              startDate,
              endDate: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              medicationName,
              dose,
              startDate,
              endDate,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
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
