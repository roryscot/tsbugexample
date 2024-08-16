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
export declare type OvulationCycleCreateFormInputValues = {
    uuid?: string;
    startDate?: string;
    endDate?: string;
    flowIntensity?: string;
    symptoms?: string;
    cycleLength?: number;
};
export declare type OvulationCycleCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    flowIntensity?: ValidationFunction<string>;
    symptoms?: ValidationFunction<string>;
    cycleLength?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationCycleCreateFormOverridesProps = {
    OvulationCycleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    flowIntensity?: PrimitiveOverrideProps<TextFieldProps>;
    symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    cycleLength?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationCycleCreateFormProps = React.PropsWithChildren<{
    overrides?: OvulationCycleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OvulationCycleCreateFormInputValues) => OvulationCycleCreateFormInputValues;
    onSuccess?: (fields: OvulationCycleCreateFormInputValues) => void;
    onError?: (fields: OvulationCycleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationCycleCreateFormInputValues) => OvulationCycleCreateFormInputValues;
    onValidate?: OvulationCycleCreateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationCycleCreateForm(props: OvulationCycleCreateFormProps): React.ReactElement;
