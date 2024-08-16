import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { HealthGoal } from "./graphql/types";
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
export declare type HealthGoalUpdateFormInputValues = {
    uuid?: string;
    goalName?: string;
    goalDescription?: string;
    targetDate?: string;
    progress?: string;
};
export declare type HealthGoalUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    goalName?: ValidationFunction<string>;
    goalDescription?: ValidationFunction<string>;
    targetDate?: ValidationFunction<string>;
    progress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HealthGoalUpdateFormOverridesProps = {
    HealthGoalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    goalName?: PrimitiveOverrideProps<TextFieldProps>;
    goalDescription?: PrimitiveOverrideProps<TextFieldProps>;
    targetDate?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HealthGoalUpdateFormProps = React.PropsWithChildren<{
    overrides?: HealthGoalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    healthGoal?: HealthGoal;
    onSubmit?: (fields: HealthGoalUpdateFormInputValues) => HealthGoalUpdateFormInputValues;
    onSuccess?: (fields: HealthGoalUpdateFormInputValues) => void;
    onError?: (fields: HealthGoalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HealthGoalUpdateFormInputValues) => HealthGoalUpdateFormInputValues;
    onValidate?: HealthGoalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HealthGoalUpdateForm(props: HealthGoalUpdateFormProps): React.ReactElement;
