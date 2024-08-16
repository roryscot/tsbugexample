import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MedicationLog } from "./graphql/types";
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
export declare type MedicationLogUpdateFormInputValues = {
    uuid?: string;
    medicationName?: string;
    dose?: string;
    startDate?: string;
    endDate?: string;
    notes?: string;
};
export declare type MedicationLogUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    medicationName?: ValidationFunction<string>;
    dose?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationLogUpdateFormOverridesProps = {
    MedicationLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    medicationName?: PrimitiveOverrideProps<TextFieldProps>;
    dose?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicationLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medicationLog?: MedicationLog;
    onSubmit?: (fields: MedicationLogUpdateFormInputValues) => MedicationLogUpdateFormInputValues;
    onSuccess?: (fields: MedicationLogUpdateFormInputValues) => void;
    onError?: (fields: MedicationLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationLogUpdateFormInputValues) => MedicationLogUpdateFormInputValues;
    onValidate?: MedicationLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationLogUpdateForm(props: MedicationLogUpdateFormProps): React.ReactElement;
