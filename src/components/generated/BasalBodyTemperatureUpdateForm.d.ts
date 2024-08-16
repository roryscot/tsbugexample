import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BasalBodyTemperature } from "./graphql/types";
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
export declare type BasalBodyTemperatureUpdateFormInputValues = {
    uuid?: string;
    date?: string;
    temperature?: number;
};
export declare type BasalBodyTemperatureUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    temperature?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasalBodyTemperatureUpdateFormOverridesProps = {
    BasalBodyTemperatureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasalBodyTemperatureUpdateFormProps = React.PropsWithChildren<{
    overrides?: BasalBodyTemperatureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    basalBodyTemperature?: BasalBodyTemperature;
    onSubmit?: (fields: BasalBodyTemperatureUpdateFormInputValues) => BasalBodyTemperatureUpdateFormInputValues;
    onSuccess?: (fields: BasalBodyTemperatureUpdateFormInputValues) => void;
    onError?: (fields: BasalBodyTemperatureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasalBodyTemperatureUpdateFormInputValues) => BasalBodyTemperatureUpdateFormInputValues;
    onValidate?: BasalBodyTemperatureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BasalBodyTemperatureUpdateForm(props: BasalBodyTemperatureUpdateFormProps): React.ReactElement;
