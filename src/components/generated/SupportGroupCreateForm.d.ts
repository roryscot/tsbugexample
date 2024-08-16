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
export declare type SupportGroupCreateFormInputValues = {
    uuid?: string;
    groupName?: string;
    groupDescription?: string;
    membershipDate?: string;
};
export declare type SupportGroupCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    groupName?: ValidationFunction<string>;
    groupDescription?: ValidationFunction<string>;
    membershipDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportGroupCreateFormOverridesProps = {
    SupportGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    groupName?: PrimitiveOverrideProps<TextFieldProps>;
    groupDescription?: PrimitiveOverrideProps<TextFieldProps>;
    membershipDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SupportGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: SupportGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SupportGroupCreateFormInputValues) => SupportGroupCreateFormInputValues;
    onSuccess?: (fields: SupportGroupCreateFormInputValues) => void;
    onError?: (fields: SupportGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportGroupCreateFormInputValues) => SupportGroupCreateFormInputValues;
    onValidate?: SupportGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function SupportGroupCreateForm(props: SupportGroupCreateFormProps): React.ReactElement;
