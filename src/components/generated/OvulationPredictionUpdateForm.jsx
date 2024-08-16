/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOvulationPrediction } from "./graphql/queries";
import { updateOvulationPrediction } from "./graphql/mutations";
const client = generateClient();
export default function OvulationPredictionUpdateForm(props) {
  const {
    id: idProp,
    ovulationPrediction: ovulationPredictionModelProp,
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
    predictedOvulationDate: "",
    notes: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [predictedOvulationDate, setPredictedOvulationDate] = React.useState(
    initialValues.predictedOvulationDate
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ovulationPredictionRecord
      ? { ...initialValues, ...ovulationPredictionRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setPredictedOvulationDate(cleanValues.predictedOvulationDate);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [ovulationPredictionRecord, setOvulationPredictionRecord] =
    React.useState(ovulationPredictionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOvulationPrediction.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOvulationPrediction
        : ovulationPredictionModelProp;
      setOvulationPredictionRecord(record);
    };
    queryData();
  }, [idProp, ovulationPredictionModelProp]);
  React.useEffect(resetStateValues, [ovulationPredictionRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    predictedOvulationDate: [],
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
          predictedOvulationDate: predictedOvulationDate ?? null,
          notes: notes ?? null,
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
            query: updateOvulationPrediction.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ovulationPredictionRecord.id,
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
      {...getOverrideProps(overrides, "OvulationPredictionUpdateForm")}
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
              predictedOvulationDate,
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
        label="Predicted ovulation date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={predictedOvulationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              predictedOvulationDate: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.predictedOvulationDate ?? value;
          }
          if (errors.predictedOvulationDate?.hasError) {
            runValidationTasks("predictedOvulationDate", value);
          }
          setPredictedOvulationDate(value);
        }}
        onBlur={() =>
          runValidationTasks("predictedOvulationDate", predictedOvulationDate)
        }
        errorMessage={errors.predictedOvulationDate?.errorMessage}
        hasError={errors.predictedOvulationDate?.hasError}
        {...getOverrideProps(overrides, "predictedOvulationDate")}
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
              predictedOvulationDate,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ovulationPredictionModelProp)}
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
              !(idProp || ovulationPredictionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
