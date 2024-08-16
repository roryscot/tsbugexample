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
export declare type BasalBodyTemperatureCreateFormInputValues = {
    uuid?: string;
    date?: string;
    temperature?: number;
};
export declare type BasalBodyTemperatureCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    temperature?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasalBodyTemperatureCreateFormOverridesProps = {
    BasalBodyTemperatureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasalBodyTemperatureCreateFormProps = React.PropsWithChildren<{
    overrides?: BasalBodyTemperatureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasalBodyTemperatureCreateFormInputValues) => BasalBodyTemperatureCreateFormInputValues;
    onSuccess?: (fields: BasalBodyTemperatureCreateFormInputValues) => void;
    onError?: (fields: BasalBodyTemperatureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasalBodyTemperatureCreateFormInputValues) => BasalBodyTemperatureCreateFormInputValues;
    onValidate?: BasalBodyTemperatureCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasalBodyTemperatureCreateForm(props: BasalBodyTemperatureCreateFormProps): React.ReactElement;
