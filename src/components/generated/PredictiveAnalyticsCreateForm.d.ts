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
export declare type PredictiveAnalyticsCreateFormInputValues = {
    uuid?: string;
    prediction?: string;
    date?: string;
};
export declare type PredictiveAnalyticsCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    prediction?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredictiveAnalyticsCreateFormOverridesProps = {
    PredictiveAnalyticsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    prediction?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PredictiveAnalyticsCreateFormProps = React.PropsWithChildren<{
    overrides?: PredictiveAnalyticsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PredictiveAnalyticsCreateFormInputValues) => PredictiveAnalyticsCreateFormInputValues;
    onSuccess?: (fields: PredictiveAnalyticsCreateFormInputValues) => void;
    onError?: (fields: PredictiveAnalyticsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PredictiveAnalyticsCreateFormInputValues) => PredictiveAnalyticsCreateFormInputValues;
    onValidate?: PredictiveAnalyticsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PredictiveAnalyticsCreateForm(props: PredictiveAnalyticsCreateFormProps): React.ReactElement;
