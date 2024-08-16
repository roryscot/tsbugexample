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
export declare type FertilityWindowCreateFormInputValues = {
    uuid?: string;
    startDate?: string;
    endDate?: string;
};
export declare type FertilityWindowCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FertilityWindowCreateFormOverridesProps = {
    FertilityWindowCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FertilityWindowCreateFormProps = React.PropsWithChildren<{
    overrides?: FertilityWindowCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FertilityWindowCreateFormInputValues) => FertilityWindowCreateFormInputValues;
    onSuccess?: (fields: FertilityWindowCreateFormInputValues) => void;
    onError?: (fields: FertilityWindowCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FertilityWindowCreateFormInputValues) => FertilityWindowCreateFormInputValues;
    onValidate?: FertilityWindowCreateFormValidationValues;
} & React.CSSProperties>;
export default function FertilityWindowCreateForm(props: FertilityWindowCreateFormProps): React.ReactElement;
