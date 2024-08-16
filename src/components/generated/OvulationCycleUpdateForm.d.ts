import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OvulationCycle } from "./graphql/types";
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
export declare type OvulationCycleUpdateFormInputValues = {
    uuid?: string;
    startDate?: string;
    endDate?: string;
    flowIntensity?: string;
    symptoms?: string;
    cycleLength?: number;
};
export declare type OvulationCycleUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    flowIntensity?: ValidationFunction<string>;
    symptoms?: ValidationFunction<string>;
    cycleLength?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationCycleUpdateFormOverridesProps = {
    OvulationCycleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    flowIntensity?: PrimitiveOverrideProps<TextFieldProps>;
    symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    cycleLength?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationCycleUpdateFormProps = React.PropsWithChildren<{
    overrides?: OvulationCycleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ovulationCycle?: OvulationCycle;
    onSubmit?: (fields: OvulationCycleUpdateFormInputValues) => OvulationCycleUpdateFormInputValues;
    onSuccess?: (fields: OvulationCycleUpdateFormInputValues) => void;
    onError?: (fields: OvulationCycleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationCycleUpdateFormInputValues) => OvulationCycleUpdateFormInputValues;
    onValidate?: OvulationCycleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationCycleUpdateForm(props: OvulationCycleUpdateFormProps): React.ReactElement;
