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
import { getOvulationCycle } from "./graphql/queries";
import { updateOvulationCycle } from "./graphql/mutations";
const client = generateClient();
export default function OvulationCycleUpdateForm(props) {
  const {
    id: idProp,
    ovulationCycle: ovulationCycleModelProp,
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
    startDate: "",
    endDate: "",
    flowIntensity: "",
    symptoms: "",
    cycleLength: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [flowIntensity, setFlowIntensity] = React.useState(
    initialValues.flowIntensity
  );
  const [symptoms, setSymptoms] = React.useState(initialValues.symptoms);
  const [cycleLength, setCycleLength] = React.useState(
    initialValues.cycleLength
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ovulationCycleRecord
      ? { ...initialValues, ...ovulationCycleRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setFlowIntensity(cleanValues.flowIntensity);
    setSymptoms(
      typeof cleanValues.symptoms === "string" || cleanValues.symptoms === null
        ? cleanValues.symptoms
        : JSON.stringify(cleanValues.symptoms)
    );
    setCycleLength(cleanValues.cycleLength);
    setErrors({});
  };
  const [ovulationCycleRecord, setOvulationCycleRecord] = React.useState(
    ovulationCycleModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOvulationCycle.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOvulationCycle
        : ovulationCycleModelProp;
      setOvulationCycleRecord(record);
    };
    queryData();
  }, [idProp, ovulationCycleModelProp]);
  React.useEffect(resetStateValues, [ovulationCycleRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    startDate: [],
    endDate: [],
    flowIntensity: [],
    symptoms: [{ type: "JSON" }],
    cycleLength: [],
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
          startDate: startDate ?? null,
          endDate: endDate ?? null,
          flowIntensity: flowIntensity ?? null,
          symptoms: symptoms ?? null,
          cycleLength: cycleLength ?? null,
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
            query: updateOvulationCycle.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ovulationCycleRecord.id,
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
      {...getOverrideProps(overrides, "OvulationCycleUpdateForm")}
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
              startDate,
              endDate,
              flowIntensity,
              symptoms,
              cycleLength,
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
              startDate: value,
              endDate,
              flowIntensity,
              symptoms,
              cycleLength,
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
              startDate,
              endDate: value,
              flowIntensity,
              symptoms,
              cycleLength,
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
        label="Flow intensity"
        isRequired={false}
        isReadOnly={false}
        value={flowIntensity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              startDate,
              endDate,
              flowIntensity: value,
              symptoms,
              cycleLength,
            };
            const result = onChange(modelFields);
            value = result?.flowIntensity ?? value;
          }
          if (errors.flowIntensity?.hasError) {
            runValidationTasks("flowIntensity", value);
          }
          setFlowIntensity(value);
        }}
        onBlur={() => runValidationTasks("flowIntensity", flowIntensity)}
        errorMessage={errors.flowIntensity?.errorMessage}
        hasError={errors.flowIntensity?.hasError}
        {...getOverrideProps(overrides, "flowIntensity")}
      ></TextField>
      <TextAreaField
        label="Symptoms"
        isRequired={false}
        isReadOnly={false}
        value={symptoms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              startDate,
              endDate,
              flowIntensity,
              symptoms: value,
              cycleLength,
            };
            const result = onChange(modelFields);
            value = result?.symptoms ?? value;
          }
          if (errors.symptoms?.hasError) {
            runValidationTasks("symptoms", value);
          }
          setSymptoms(value);
        }}
        onBlur={() => runValidationTasks("symptoms", symptoms)}
        errorMessage={errors.symptoms?.errorMessage}
        hasError={errors.symptoms?.hasError}
        {...getOverrideProps(overrides, "symptoms")}
      ></TextAreaField>
      <TextField
        label="Cycle length"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cycleLength}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              uuid,
              startDate,
              endDate,
              flowIntensity,
              symptoms,
              cycleLength: value,
            };
            const result = onChange(modelFields);
            value = result?.cycleLength ?? value;
          }
          if (errors.cycleLength?.hasError) {
            runValidationTasks("cycleLength", value);
          }
          setCycleLength(value);
        }}
        onBlur={() => runValidationTasks("cycleLength", cycleLength)}
        errorMessage={errors.cycleLength?.errorMessage}
        hasError={errors.cycleLength?.hasError}
        {...getOverrideProps(overrides, "cycleLength")}
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
          isDisabled={!(idProp || ovulationCycleModelProp)}
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
              !(idProp || ovulationCycleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
