import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type WearableDataCreateFormInputValues = {
    uuid?: string;
    deviceId?: string;
    dataType?: string;
    dataValue?: string;
    timestamp?: string;
};
export declare type WearableDataCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    deviceId?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    dataValue?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WearableDataCreateFormOverridesProps = {
    WearableDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    deviceId?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    dataValue?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WearableDataCreateFormProps = React.PropsWithChildren<{
    overrides?: WearableDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WearableDataCreateFormInputValues) => WearableDataCreateFormInputValues;
    onSuccess?: (fields: WearableDataCreateFormInputValues) => void;
    onError?: (fields: WearableDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WearableDataCreateFormInputValues) => WearableDataCreateFormInputValues;
    onValidate?: WearableDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function WearableDataCreateForm(props: WearableDataCreateFormProps): React.ReactElement;
