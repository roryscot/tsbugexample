import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FertilityWindow } from "./graphql/types";
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
export declare type FertilityWindowUpdateFormInputValues = {
    uuid?: string;
    startDate?: string;
    endDate?: string;
};
export declare type FertilityWindowUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FertilityWindowUpdateFormOverridesProps = {
    FertilityWindowUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FertilityWindowUpdateFormProps = React.PropsWithChildren<{
    overrides?: FertilityWindowUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fertilityWindow?: FertilityWindow;
    onSubmit?: (fields: FertilityWindowUpdateFormInputValues) => FertilityWindowUpdateFormInputValues;
    onSuccess?: (fields: FertilityWindowUpdateFormInputValues) => void;
    onError?: (fields: FertilityWindowUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FertilityWindowUpdateFormInputValues) => FertilityWindowUpdateFormInputValues;
    onValidate?: FertilityWindowUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FertilityWindowUpdateForm(props: FertilityWindowUpdateFormProps): React.ReactElement;
