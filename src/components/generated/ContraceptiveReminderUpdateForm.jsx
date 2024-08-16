/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContraceptiveReminder } from "./graphql/queries";
import { updateContraceptiveReminder } from "./graphql/mutations";
const client = generateClient();
export default function ContraceptiveReminderUpdateForm(props) {
  const {
    id: idProp,
    contraceptiveReminder: contraceptiveReminderModelProp,
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
    contraceptiveMethod: "",
    reminderTime: "",
    status: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [contraceptiveMethod, setContraceptiveMethod] = React.useState(
    initialValues.contraceptiveMethod
  );
  const [reminderTime, setReminderTime] = React.useState(
    initialValues.reminderTime
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contraceptiveReminderRecord
      ? { ...initialValues, ...contraceptiveReminderRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setContraceptiveMethod(cleanValues.contraceptiveMethod);
    setReminderTime(cleanValues.reminderTime);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [contraceptiveReminderRecord, setContraceptiveReminderRecord] =
    React.useState(contraceptiveReminderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContraceptiveReminder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContraceptiveReminder
        : contraceptiveReminderModelProp;
      setContraceptiveReminderRecord(record);
    };
    queryData();
  }, [idProp, contraceptiveReminderModelProp]);
  React.useEffect(resetStateValues, [contraceptiveReminderRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    contraceptiveMethod: [],
    reminderTime: [],
    status: [],
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
          contraceptiveMethod: contraceptiveMethod ?? null,
          reminderTime: reminderTime ?? null,
          status: status ?? null,
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
            query: updateContraceptiveReminder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contraceptiveReminderRecord.id,
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
      {...getOverrideProps(overrides, "ContraceptiveReminderUpdateForm")}
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
              contraceptiveMethod,
              reminderTime,
              status,
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
        label="Contraceptive method"
        isRequired={false}
        isReadOnly={false}
        value={contraceptiveMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              contraceptiveMethod: value,
              reminderTime,
              status,
            };
            const result = onChange(modelFields);
            value = result?.contraceptiveMethod ?? value;
          }
          if (errors.contraceptiveMethod?.hasError) {
            runValidationTasks("contraceptiveMethod", value);
          }
          setContraceptiveMethod(value);
        }}
        onBlur={() =>
          runValidationTasks("contraceptiveMethod", contraceptiveMethod)
        }
        errorMessage={errors.contraceptiveMethod?.errorMessage}
        hasError={errors.contraceptiveMethod?.hasError}
        {...getOverrideProps(overrides, "contraceptiveMethod")}
      ></TextField>
      <TextField
        label="Reminder time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={reminderTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              contraceptiveMethod,
              reminderTime: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.reminderTime ?? value;
          }
          if (errors.reminderTime?.hasError) {
            runValidationTasks("reminderTime", value);
          }
          setReminderTime(value);
        }}
        onBlur={() => runValidationTasks("reminderTime", reminderTime)}
        errorMessage={errors.reminderTime?.errorMessage}
        hasError={errors.reminderTime?.hasError}
        {...getOverrideProps(overrides, "reminderTime")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              contraceptiveMethod,
              reminderTime,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
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
          isDisabled={!(idProp || contraceptiveReminderModelProp)}
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
              !(idProp || contraceptiveReminderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
