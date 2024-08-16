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
export declare type ContraceptiveMethodCreateFormInputValues = {
    uuid?: string;
    name?: string;
    description?: string;
    sideEffects?: string[];
};
export declare type ContraceptiveMethodCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sideEffects?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContraceptiveMethodCreateFormOverridesProps = {
    ContraceptiveMethodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sideEffects?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContraceptiveMethodCreateFormProps = React.PropsWithChildren<{
    overrides?: ContraceptiveMethodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContraceptiveMethodCreateFormInputValues) => ContraceptiveMethodCreateFormInputValues;
    onSuccess?: (fields: ContraceptiveMethodCreateFormInputValues) => void;
    onError?: (fields: ContraceptiveMethodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContraceptiveMethodCreateFormInputValues) => ContraceptiveMethodCreateFormInputValues;
    onValidate?: ContraceptiveMethodCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContraceptiveMethodCreateForm(props: ContraceptiveMethodCreateFormProps): React.ReactElement;
