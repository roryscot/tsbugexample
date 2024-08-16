import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AutomatedUpdateCreateFormInputValues = {
    uuid?: string;
    updateType?: string;
    updateData?: string;
    timestamp?: string;
};
export declare type AutomatedUpdateCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    updateType?: ValidationFunction<string>;
    updateData?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AutomatedUpdateCreateFormOverridesProps = {
    AutomatedUpdateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    updateType?: PrimitiveOverrideProps<TextFieldProps>;
    updateData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AutomatedUpdateCreateFormProps = React.PropsWithChildren<{
    overrides?: AutomatedUpdateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AutomatedUpdateCreateFormInputValues) => AutomatedUpdateCreateFormInputValues;
    onSuccess?: (fields: AutomatedUpdateCreateFormInputValues) => void;
    onError?: (fields: AutomatedUpdateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AutomatedUpdateCreateFormInputValues) => AutomatedUpdateCreateFormInputValues;
    onValidate?: AutomatedUpdateCreateFormValidationValues;
} & React.CSSProperties>;
export default function AutomatedUpdateCreateForm(props: AutomatedUpdateCreateFormProps): React.ReactElement;
