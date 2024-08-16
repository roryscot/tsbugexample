import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PrivacySetting } from "./graphql/types";
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
export declare type PrivacySettingUpdateFormInputValues = {
    uuid?: string;
    settingName?: string;
    settingValue?: string;
};
export declare type PrivacySettingUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    settingName?: ValidationFunction<string>;
    settingValue?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivacySettingUpdateFormOverridesProps = {
    PrivacySettingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    settingName?: PrimitiveOverrideProps<TextFieldProps>;
    settingValue?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivacySettingUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivacySettingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privacySetting?: PrivacySetting;
    onSubmit?: (fields: PrivacySettingUpdateFormInputValues) => PrivacySettingUpdateFormInputValues;
    onSuccess?: (fields: PrivacySettingUpdateFormInputValues) => void;
    onError?: (fields: PrivacySettingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacySettingUpdateFormInputValues) => PrivacySettingUpdateFormInputValues;
    onValidate?: PrivacySettingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacySettingUpdateForm(props: PrivacySettingUpdateFormProps): React.ReactElement;
