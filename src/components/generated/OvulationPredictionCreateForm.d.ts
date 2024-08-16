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
export declare type OvulationPredictionCreateFormInputValues = {
    uuid?: string;
    predictedOvulationDate?: string;
    notes?: string;
};
export declare type OvulationPredictionCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    predictedOvulationDate?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationPredictionCreateFormOverridesProps = {
    OvulationPredictionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    predictedOvulationDate?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationPredictionCreateFormProps = React.PropsWithChildren<{
    overrides?: OvulationPredictionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OvulationPredictionCreateFormInputValues) => OvulationPredictionCreateFormInputValues;
    onSuccess?: (fields: OvulationPredictionCreateFormInputValues) => void;
    onError?: (fields: OvulationPredictionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationPredictionCreateFormInputValues) => OvulationPredictionCreateFormInputValues;
    onValidate?: OvulationPredictionCreateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationPredictionCreateForm(props: OvulationPredictionCreateFormProps): React.ReactElement;
