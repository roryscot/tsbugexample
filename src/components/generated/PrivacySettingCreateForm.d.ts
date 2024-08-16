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
export declare type PrivacySettingCreateFormInputValues = {
    uuid?: string;
    settingName?: string;
    settingValue?: string;
};
export declare type PrivacySettingCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    settingName?: ValidationFunction<string>;
    settingValue?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivacySettingCreateFormOverridesProps = {
    PrivacySettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    settingName?: PrimitiveOverrideProps<TextFieldProps>;
    settingValue?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivacySettingCreateFormProps = React.PropsWithChildren<{
    overrides?: PrivacySettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrivacySettingCreateFormInputValues) => PrivacySettingCreateFormInputValues;
    onSuccess?: (fields: PrivacySettingCreateFormInputValues) => void;
    onError?: (fields: PrivacySettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacySettingCreateFormInputValues) => PrivacySettingCreateFormInputValues;
    onValidate?: PrivacySettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacySettingCreateForm(props: PrivacySettingCreateFormProps): React.ReactElement;
