/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPredictiveAnalytics } from "./graphql/queries";
import { updatePredictiveAnalytics } from "./graphql/mutations";
const client = generateClient();
export default function PredictiveAnalyticsUpdateForm(props) {
  const {
    id: idProp,
    predictiveAnalytics: predictiveAnalyticsModelProp,
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
    prediction: "",
    date: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [prediction, setPrediction] = React.useState(initialValues.prediction);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = predictiveAnalyticsRecord
      ? { ...initialValues, ...predictiveAnalyticsRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setPrediction(cleanValues.prediction);
    setDate(cleanValues.date);
    setErrors({});
  };
  const [predictiveAnalyticsRecord, setPredictiveAnalyticsRecord] =
    React.useState(predictiveAnalyticsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPredictiveAnalytics.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPredictiveAnalytics
        : predictiveAnalyticsModelProp;
      setPredictiveAnalyticsRecord(record);
    };
    queryData();
  }, [idProp, predictiveAnalyticsModelProp]);
  React.useEffect(resetStateValues, [predictiveAnalyticsRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    prediction: [],
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
          prediction: prediction ?? null,
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
            query: updatePredictiveAnalytics.replaceAll("__typename", ""),
            variables: {
              input: {
                id: predictiveAnalyticsRecord.id,
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
      {...getOverrideProps(overrides, "PredictiveAnalyticsUpdateForm")}
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
              prediction,
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
        label="Prediction"
        isRequired={false}
        isReadOnly={false}
        value={prediction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              prediction: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.prediction ?? value;
          }
          if (errors.prediction?.hasError) {
            runValidationTasks("prediction", value);
          }
          setPrediction(value);
        }}
        onBlur={() => runValidationTasks("prediction", prediction)}
        errorMessage={errors.prediction?.errorMessage}
        hasError={errors.prediction?.hasError}
        {...getOverrideProps(overrides, "prediction")}
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
              prediction,
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
          isDisabled={!(idProp || predictiveAnalyticsModelProp)}
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
              !(idProp || predictiveAnalyticsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
