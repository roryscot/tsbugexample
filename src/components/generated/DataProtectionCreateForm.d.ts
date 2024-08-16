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
export declare type DataProtectionCreateFormInputValues = {
    uuid?: string;
    dataType?: string;
    protectionStatus?: string;
};
export declare type DataProtectionCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    protectionStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataProtectionCreateFormOverridesProps = {
    DataProtectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    protectionStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataProtectionCreateFormProps = React.PropsWithChildren<{
    overrides?: DataProtectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DataProtectionCreateFormInputValues) => DataProtectionCreateFormInputValues;
    onSuccess?: (fields: DataProtectionCreateFormInputValues) => void;
    onError?: (fields: DataProtectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataProtectionCreateFormInputValues) => DataProtectionCreateFormInputValues;
    onValidate?: DataProtectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function DataProtectionCreateForm(props: DataProtectionCreateFormProps): React.ReactElement;
