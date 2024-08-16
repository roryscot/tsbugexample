import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AutomatedUpdate } from "./graphql/types";
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
export declare type AutomatedUpdateUpdateFormInputValues = {
    uuid?: string;
    updateType?: string;
    updateData?: string;
    timestamp?: string;
};
export declare type AutomatedUpdateUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    updateType?: ValidationFunction<string>;
    updateData?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AutomatedUpdateUpdateFormOverridesProps = {
    AutomatedUpdateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    updateType?: PrimitiveOverrideProps<TextFieldProps>;
    updateData?: PrimitiveOverrideProps<TextAreaFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AutomatedUpdateUpdateFormProps = React.PropsWithChildren<{
    overrides?: AutomatedUpdateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    automatedUpdate?: AutomatedUpdate;
    onSubmit?: (fields: AutomatedUpdateUpdateFormInputValues) => AutomatedUpdateUpdateFormInputValues;
    onSuccess?: (fields: AutomatedUpdateUpdateFormInputValues) => void;
    onError?: (fields: AutomatedUpdateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AutomatedUpdateUpdateFormInputValues) => AutomatedUpdateUpdateFormInputValues;
    onValidate?: AutomatedUpdateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AutomatedUpdateUpdateForm(props: AutomatedUpdateUpdateFormProps): React.ReactElement;
