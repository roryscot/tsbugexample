import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PredictiveAnalytics } from "./graphql/types";
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
export declare type PredictiveAnalyticsUpdateFormInputValues = {
    uuid?: string;
    prediction?: string;
    date?: string;
};
export declare type PredictiveAnalyticsUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    prediction?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredictiveAnalyticsUpdateFormOverridesProps = {
    PredictiveAnalyticsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    prediction?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PredictiveAnalyticsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PredictiveAnalyticsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    predictiveAnalytics?: PredictiveAnalytics;
    onSubmit?: (fields: PredictiveAnalyticsUpdateFormInputValues) => PredictiveAnalyticsUpdateFormInputValues;
    onSuccess?: (fields: PredictiveAnalyticsUpdateFormInputValues) => void;
    onError?: (fields: PredictiveAnalyticsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PredictiveAnalyticsUpdateFormInputValues) => PredictiveAnalyticsUpdateFormInputValues;
    onValidate?: PredictiveAnalyticsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PredictiveAnalyticsUpdateForm(props: PredictiveAnalyticsUpdateFormProps): React.ReactElement;
