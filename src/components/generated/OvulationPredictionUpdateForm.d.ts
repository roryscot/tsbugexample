import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OvulationPrediction } from "./graphql/types";
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
export declare type OvulationPredictionUpdateFormInputValues = {
    uuid?: string;
    predictedOvulationDate?: string;
    notes?: string;
};
export declare type OvulationPredictionUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    predictedOvulationDate?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationPredictionUpdateFormOverridesProps = {
    OvulationPredictionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    predictedOvulationDate?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OvulationPredictionUpdateFormProps = React.PropsWithChildren<{
    overrides?: OvulationPredictionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ovulationPrediction?: OvulationPrediction;
    onSubmit?: (fields: OvulationPredictionUpdateFormInputValues) => OvulationPredictionUpdateFormInputValues;
    onSuccess?: (fields: OvulationPredictionUpdateFormInputValues) => void;
    onError?: (fields: OvulationPredictionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationPredictionUpdateFormInputValues) => OvulationPredictionUpdateFormInputValues;
    onValidate?: OvulationPredictionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationPredictionUpdateForm(props: OvulationPredictionUpdateFormProps): React.ReactElement;
