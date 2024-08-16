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
export declare type SymptomLogCreateFormInputValues = {
    uuid?: string;
    date?: string;
    symptom?: string;
    severity?: string;
};
export declare type SymptomLogCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    symptom?: ValidationFunction<string>;
    severity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SymptomLogCreateFormOverridesProps = {
    SymptomLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    symptom?: PrimitiveOverrideProps<TextFieldProps>;
    severity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SymptomLogCreateFormProps = React.PropsWithChildren<{
    overrides?: SymptomLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SymptomLogCreateFormInputValues) => SymptomLogCreateFormInputValues;
    onSuccess?: (fields: SymptomLogCreateFormInputValues) => void;
    onError?: (fields: SymptomLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SymptomLogCreateFormInputValues) => SymptomLogCreateFormInputValues;
    onValidate?: SymptomLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function SymptomLogCreateForm(props: SymptomLogCreateFormProps): React.ReactElement;
