import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProgressReport } from "./graphql/types";
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
export declare type ProgressReportUpdateFormInputValues = {
    uuid?: string;
    reportDate?: string;
    reportDetails?: string;
};
export declare type ProgressReportUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    reportDate?: ValidationFunction<string>;
    reportDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressReportUpdateFormOverridesProps = {
    ProgressReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    reportDate?: PrimitiveOverrideProps<TextFieldProps>;
    reportDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgressReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    progressReport?: ProgressReport;
    onSubmit?: (fields: ProgressReportUpdateFormInputValues) => ProgressReportUpdateFormInputValues;
    onSuccess?: (fields: ProgressReportUpdateFormInputValues) => void;
    onError?: (fields: ProgressReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressReportUpdateFormInputValues) => ProgressReportUpdateFormInputValues;
    onValidate?: ProgressReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressReportUpdateForm(props: ProgressReportUpdateFormProps): React.ReactElement;
