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
export declare type OvulationCycleAnalysisCreateFormInputValues = {
    uuid?: string;
    analysis?: string;
    date?: string;
};
export declare type OvulationCycleAnalysisCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    analysis?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationCycleAnalysisCreateFormOverridesProps = {
    OvulationCycleAnalysisCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    analysis?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationCycleAnalysisCreateFormProps = React.PropsWithChildren<{
    overrides?: OvulationCycleAnalysisCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OvulationCycleAnalysisCreateFormInputValues) => OvulationCycleAnalysisCreateFormInputValues;
    onSuccess?: (fields: OvulationCycleAnalysisCreateFormInputValues) => void;
    onError?: (fields: OvulationCycleAnalysisCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationCycleAnalysisCreateFormInputValues) => OvulationCycleAnalysisCreateFormInputValues;
    onValidate?: OvulationCycleAnalysisCreateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationCycleAnalysisCreateForm(props: OvulationCycleAnalysisCreateFormProps): React.ReactElement;
