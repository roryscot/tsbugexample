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
export declare type MedicationLogCreateFormInputValues = {
    uuid?: string;
    medicationName?: string;
    dose?: string;
    startDate?: string;
    endDate?: string;
    notes?: string;
};
export declare type MedicationLogCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    medicationName?: ValidationFunction<string>;
    dose?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationLogCreateFormOverridesProps = {
    MedicationLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    medicationName?: PrimitiveOverrideProps<TextFieldProps>;
    dose?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationLogCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicationLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicationLogCreateFormInputValues) => MedicationLogCreateFormInputValues;
    onSuccess?: (fields: MedicationLogCreateFormInputValues) => void;
    onError?: (fields: MedicationLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationLogCreateFormInputValues) => MedicationLogCreateFormInputValues;
    onValidate?: MedicationLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationLogCreateForm(props: MedicationLogCreateFormProps): React.ReactElement;
