import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OvulationTest } from "./graphql/types";
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
export declare type OvulationTestUpdateFormInputValues = {
    uuid?: string;
    date?: string;
    result?: string;
};
export declare type OvulationTestUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OvulationTestUpdateFormOverridesProps = {
    OvulationTestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type OvulationTestUpdateFormProps = React.PropsWithChildren<{
    overrides?: OvulationTestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ovulationTest?: OvulationTest;
    onSubmit?: (fields: OvulationTestUpdateFormInputValues) => OvulationTestUpdateFormInputValues;
    onSuccess?: (fields: OvulationTestUpdateFormInputValues) => void;
    onError?: (fields: OvulationTestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OvulationTestUpdateFormInputValues) => OvulationTestUpdateFormInputValues;
    onValidate?: OvulationTestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OvulationTestUpdateForm(props: OvulationTestUpdateFormProps): React.ReactElement;
