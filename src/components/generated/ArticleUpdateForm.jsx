/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getArticle } from "./graphql/queries";
import { updateArticle } from "./graphql/mutations";
const client = generateClient();
export default function ArticleUpdateForm(props) {
  const {
    id: idProp,
    article: articleModelProp,
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
    title: "",
    content: "",
    category: "",
    publishedDate: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [category, setCategory] = React.useState(initialValues.category);
  const [publishedDate, setPublishedDate] = React.useState(
    initialValues.publishedDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = articleRecord
      ? { ...initialValues, ...articleRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setCategory(cleanValues.category);
    setPublishedDate(cleanValues.publishedDate);
    setErrors({});
  };
  const [articleRecord, setArticleRecord] = React.useState(articleModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getArticle.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getArticle
        : articleModelProp;
      setArticleRecord(record);
    };
    queryData();
  }, [idProp, articleModelProp]);
  React.useEffect(resetStateValues, [articleRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    title: [],
    content: [],
    category: [],
    publishedDate: [],
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
          title: title ?? null,
          content: content ?? null,
          category: category ?? null,
          publishedDate: publishedDate ?? null,
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
            query: updateArticle.replaceAll("__typename", ""),
            variables: {
              input: {
                id: articleRecord.id,
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
      {...getOverrideProps(overrides, "ArticleUpdateForm")}
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
              title,
              content,
              category,
              publishedDate,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title: value,
              content,
              category,
              publishedDate,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              content: value,
              category,
              publishedDate,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              content,
              category: value,
              publishedDate,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Published date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={publishedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              content,
              category,
              publishedDate: value,
            };
            const result = onChange(modelFields);
            value = result?.publishedDate ?? value;
          }
          if (errors.publishedDate?.hasError) {
            runValidationTasks("publishedDate", value);
          }
          setPublishedDate(value);
        }}
        onBlur={() => runValidationTasks("publishedDate", publishedDate)}
        errorMessage={errors.publishedDate?.errorMessage}
        hasError={errors.publishedDate?.hasError}
        {...getOverrideProps(overrides, "publishedDate")}
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
          isDisabled={!(idProp || articleModelProp)}
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
              !(idProp || articleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
