import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContraceptiveMethod } from "./graphql/types";
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
export declare type ContraceptiveMethodUpdateFormInputValues = {
    uuid?: string;
    name?: string;
    description?: string;
    sideEffects?: string[];
};
export declare type ContraceptiveMethodUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sideEffects?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContraceptiveMethodUpdateFormOverridesProps = {
    ContraceptiveMethodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sideEffects?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContraceptiveMethodUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContraceptiveMethodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contraceptiveMethod?: ContraceptiveMethod;
    onSubmit?: (fields: ContraceptiveMethodUpdateFormInputValues) => ContraceptiveMethodUpdateFormInputValues;
    onSuccess?: (fields: ContraceptiveMethodUpdateFormInputValues) => void;
    onError?: (fields: ContraceptiveMethodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContraceptiveMethodUpdateFormInputValues) => ContraceptiveMethodUpdateFormInputValues;
    onValidate?: ContraceptiveMethodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContraceptiveMethodUpdateForm(props: ContraceptiveMethodUpdateFormProps): React.ReactElement;
