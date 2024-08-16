import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OvulationCycleAnalysis } from "./graphql/types";
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
export declare type OvulationCycleAnalysisUpdateFormInputValues = {
    uuid?: string;
    analysis?: string;
    date?: string;
};
export declare type OvulationCycleAnalysisUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    analysis?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationCycleAnalysisUpdateFormOverridesProps = {
    OvulationCycleAnalysisUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    analysis?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationCycleAnalysisUpdateFormProps = React.PropsWithChildren<{
    overrides?: OvulationCycleAnalysisUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ovulationCycleAnalysis?: OvulationCycleAnalysis;
    onSubmit?: (fields: OvulationCycleAnalysisUpdateFormInputValues) => OvulationCycleAnalysisUpdateFormInputValues;
    onSuccess?: (fields: OvulationCycleAnalysisUpdateFormInputValues) => void;
    onError?: (fields: OvulationCycleAnalysisUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationCycleAnalysisUpdateFormInputValues) => OvulationCycleAnalysisUpdateFormInputValues;
    onValidate?: OvulationCycleAnalysisUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationCycleAnalysisUpdateForm(props: OvulationCycleAnalysisUpdateFormProps): React.ReactElement;
