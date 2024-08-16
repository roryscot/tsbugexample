import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WearableData } from "./graphql/types";
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
export declare type WearableDataUpdateFormInputValues = {
    uuid?: string;
    deviceId?: string;
    dataType?: string;
    dataValue?: string;
    timestamp?: string;
};
export declare type WearableDataUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    deviceId?: ValidationFunction<string>;
    dataType?: ValidationFunction<string>;
    dataValue?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WearableDataUpdateFormOverridesProps = {
    WearableDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    deviceId?: PrimitiveOverrideProps<TextFieldProps>;
    dataType?: PrimitiveOverrideProps<TextFieldProps>;
    dataValue?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WearableDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: WearableDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    wearableData?: WearableData;
    onSubmit?: (fields: WearableDataUpdateFormInputValues) => WearableDataUpdateFormInputValues;
    onSuccess?: (fields: WearableDataUpdateFormInputValues) => void;
    onError?: (fields: WearableDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WearableDataUpdateFormInputValues) => WearableDataUpdateFormInputValues;
    onValidate?: WearableDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WearableDataUpdateForm(props: WearableDataUpdateFormProps): React.ReactElement;
