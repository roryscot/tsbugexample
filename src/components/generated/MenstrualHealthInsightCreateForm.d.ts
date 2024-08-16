import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MenstrualHealthInsightCreateFormInputValues = {
    uuid?: string;
    insight?: string;
    date?: string;
};
export declare type MenstrualHealthInsightCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    insight?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenstrualHealthInsightCreateFormOverridesProps = {
    MenstrualHealthInsightCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    insight?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenstrualHealthInsightCreateFormProps = React.PropsWithChildren<{
    overrides?: MenstrualHealthInsightCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenstrualHealthInsightCreateFormInputValues) => MenstrualHealthInsightCreateFormInputValues;
    onSuccess?: (fields: MenstrualHealthInsightCreateFormInputValues) => void;
    onError?: (fields: MenstrualHealthInsightCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenstrualHealthInsightCreateFormInputValues) => MenstrualHealthInsightCreateFormInputValues;
    onValidate?: MenstrualHealthInsightCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenstrualHealthInsightCreateForm(props: MenstrualHealthInsightCreateFormProps): React.ReactElement;
