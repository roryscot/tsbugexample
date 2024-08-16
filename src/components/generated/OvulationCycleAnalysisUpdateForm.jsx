/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOvulationCycleAnalysis } from "./graphql/queries";
import { updateOvulationCycleAnalysis } from "./graphql/mutations";
const client = generateClient();
export default function OvulationCycleAnalysisUpdateForm(props) {
  const {
    id: idProp,
    ovulationCycleAnalysis: ovulationCycleAnalysisModelProp,
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
    analysis: "",
    date: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [analysis, setAnalysis] = React.useState(initialValues.analysis);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ovulationCycleAnalysisRecord
      ? { ...initialValues, ...ovulationCycleAnalysisRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setAnalysis(cleanValues.analysis);
    setDate(cleanValues.date);
    setErrors({});
  };
  const [ovulationCycleAnalysisRecord, setOvulationCycleAnalysisRecord] =
    React.useState(ovulationCycleAnalysisModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOvulationCycleAnalysis.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOvulationCycleAnalysis
        : ovulationCycleAnalysisModelProp;
      setOvulationCycleAnalysisRecord(record);
    };
    queryData();
  }, [idProp, ovulationCycleAnalysisModelProp]);
  React.useEffect(resetStateValues, [ovulationCycleAnalysisRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    analysis: [],
    date: [],
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
          analysis: analysis ?? null,
          date: date ?? null,
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
            query: updateOvulationCycleAnalysis.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ovulationCycleAnalysisRecord.id,
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
      {...getOverrideProps(overrides, "OvulationCycleAnalysisUpdateForm")}
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
              analysis,
              date,
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
        label="Analysis"
        isRequired={false}
        isReadOnly={false}
        value={analysis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              analysis: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.analysis ?? value;
          }
          if (errors.analysis?.hasError) {
            runValidationTasks("analysis", value);
          }
          setAnalysis(value);
        }}
        onBlur={() => runValidationTasks("analysis", analysis)}
        errorMessage={errors.analysis?.errorMessage}
        hasError={errors.analysis?.hasError}
        {...getOverrideProps(overrides, "analysis")}
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
              analysis,
              date: value,
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
          isDisabled={!(idProp || ovulationCycleAnalysisModelProp)}
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
              !(idProp || ovulationCycleAnalysisModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
