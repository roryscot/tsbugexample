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
export declare type ProgressReportCreateFormInputValues = {
    uuid?: string;
    reportDate?: string;
    reportDetails?: string;
};
export declare type ProgressReportCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    reportDate?: ValidationFunction<string>;
    reportDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressReportCreateFormOverridesProps = {
    ProgressReportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    reportDate?: PrimitiveOverrideProps<TextFieldProps>;
    reportDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressReportCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgressReportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgressReportCreateFormInputValues) => ProgressReportCreateFormInputValues;
    onSuccess?: (fields: ProgressReportCreateFormInputValues) => void;
    onError?: (fields: ProgressReportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressReportCreateFormInputValues) => ProgressReportCreateFormInputValues;
    onValidate?: ProgressReportCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressReportCreateForm(props: ProgressReportCreateFormProps): React.ReactElement;
