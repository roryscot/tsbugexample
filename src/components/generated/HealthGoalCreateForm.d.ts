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
export declare type HealthGoalCreateFormInputValues = {
    uuid?: string;
    goalName?: string;
    goalDescription?: string;
    targetDate?: string;
    progress?: string;
};
export declare type HealthGoalCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    goalName?: ValidationFunction<string>;
    goalDescription?: ValidationFunction<string>;
    targetDate?: ValidationFunction<string>;
    progress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HealthGoalCreateFormOverridesProps = {
    HealthGoalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    goalName?: PrimitiveOverrideProps<TextFieldProps>;
    goalDescription?: PrimitiveOverrideProps<TextFieldProps>;
    targetDate?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HealthGoalCreateFormProps = React.PropsWithChildren<{
    overrides?: HealthGoalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HealthGoalCreateFormInputValues) => HealthGoalCreateFormInputValues;
    onSuccess?: (fields: HealthGoalCreateFormInputValues) => void;
    onError?: (fields: HealthGoalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HealthGoalCreateFormInputValues) => HealthGoalCreateFormInputValues;
    onValidate?: HealthGoalCreateFormValidationValues;
} & React.CSSProperties>;
export default function HealthGoalCreateForm(props: HealthGoalCreateFormProps): React.ReactElement;
