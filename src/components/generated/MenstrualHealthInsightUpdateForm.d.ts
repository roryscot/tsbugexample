import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MenstrualHealthInsight } from "./graphql/types";
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
export declare type MenstrualHealthInsightUpdateFormInputValues = {
    uuid?: string;
    insight?: string;
    date?: string;
};
export declare type MenstrualHealthInsightUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    insight?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenstrualHealthInsightUpdateFormOverridesProps = {
    MenstrualHealthInsightUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    insight?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenstrualHealthInsightUpdateFormProps = React.PropsWithChildren<{
    overrides?: MenstrualHealthInsightUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    menstrualHealthInsight?: MenstrualHealthInsight;
    onSubmit?: (fields: MenstrualHealthInsightUpdateFormInputValues) => MenstrualHealthInsightUpdateFormInputValues;
    onSuccess?: (fields: MenstrualHealthInsightUpdateFormInputValues) => void;
    onError?: (fields: MenstrualHealthInsightUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenstrualHealthInsightUpdateFormInputValues) => MenstrualHealthInsightUpdateFormInputValues;
    onValidate?: MenstrualHealthInsightUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MenstrualHealthInsightUpdateForm(props: MenstrualHealthInsightUpdateFormProps): React.ReactElement;
