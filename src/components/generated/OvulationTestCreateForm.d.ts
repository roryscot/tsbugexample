import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type OvulationTestCreateFormInputValues = {
    uuid?: string;
    date?: string;
    result?: string;
};
export declare type OvulationTestCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationTestCreateFormOverridesProps = {
    OvulationTestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type OvulationTestCreateFormProps = React.PropsWithChildren<{
    overrides?: OvulationTestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OvulationTestCreateFormInputValues) => OvulationTestCreateFormInputValues;
    onSuccess?: (fields: OvulationTestCreateFormInputValues) => void;
    onError?: (fields: OvulationTestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationTestCreateFormInputValues) => OvulationTestCreateFormInputValues;
    onValidate?: OvulationTestCreateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationTestCreateForm(props: OvulationTestCreateFormProps): React.ReactElement;
