import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DataProtection } from "./graphql/types";
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
export declare type DataProtectionUpdateFormInputValues = {
    uuid?: string;
    dataType?: string;
    protectionStatus?: string;
};
export declare type DataProtectionUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    protectionStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataProtectionUpdateFormOverridesProps = {
    DataProtectionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    protectionStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataProtectionUpdateFormProps = React.PropsWithChildren<{
    overrides?: DataProtectionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dataProtection?: DataProtection;
    onSubmit?: (fields: DataProtectionUpdateFormInputValues) => DataProtectionUpdateFormInputValues;
    onSuccess?: (fields: DataProtectionUpdateFormInputValues) => void;
    onError?: (fields: DataProtectionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataProtectionUpdateFormInputValues) => DataProtectionUpdateFormInputValues;
    onValidate?: DataProtectionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DataProtectionUpdateForm(props: DataProtectionUpdateFormProps): React.ReactElement;
