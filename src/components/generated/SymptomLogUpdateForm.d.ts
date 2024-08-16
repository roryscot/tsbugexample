import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SymptomLog } from "./graphql/types";
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
export declare type SymptomLogUpdateFormInputValues = {
    uuid?: string;
    date?: string;
    symptom?: string;
    severity?: string;
};
export declare type SymptomLogUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    symptom?: ValidationFunction<string>;
    severity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SymptomLogUpdateFormOverridesProps = {
    SymptomLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    symptom?: PrimitiveOverrideProps<TextFieldProps>;
    severity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SymptomLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: SymptomLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    symptomLog?: SymptomLog;
    onSubmit?: (fields: SymptomLogUpdateFormInputValues) => SymptomLogUpdateFormInputValues;
    onSuccess?: (fields: SymptomLogUpdateFormInputValues) => void;
    onError?: (fields: SymptomLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SymptomLogUpdateFormInputValues) => SymptomLogUpdateFormInputValues;
    onValidate?: SymptomLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SymptomLogUpdateForm(props: SymptomLogUpdateFormProps): React.ReactElement;
