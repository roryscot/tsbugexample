import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FAQ } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FAQUpdateFormInputValues = {
    uuid?: string;
    question?: string;
    answer?: string;
};
export declare type FAQUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQUpdateFormOverridesProps = {
    FAQUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    answer?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAQUpdateFormProps = React.PropsWithChildren<{
    overrides?: FAQUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fAQ?: FAQ;
    onSubmit?: (fields: FAQUpdateFormInputValues) => FAQUpdateFormInputValues;
    onSuccess?: (fields: FAQUpdateFormInputValues) => void;
    onError?: (fields: FAQUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FAQUpdateFormInputValues) => FAQUpdateFormInputValues;
    onValidate?: FAQUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FAQUpdateForm(props: FAQUpdateFormProps): React.ReactElement;
