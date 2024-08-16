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
export declare type ContraceptiveReminderCreateFormInputValues = {
    uuid?: string;
    contraceptiveMethod?: string;
    reminderTime?: string;
    status?: string;
};
export declare type ContraceptiveReminderCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    contraceptiveMethod?: ValidationFunction<string>;
    reminderTime?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContraceptiveReminderCreateFormOverridesProps = {
    ContraceptiveReminderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    contraceptiveMethod?: PrimitiveOverrideProps<TextFieldProps>;
    reminderTime?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContraceptiveReminderCreateFormProps = React.PropsWithChildren<{
    overrides?: ContraceptiveReminderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContraceptiveReminderCreateFormInputValues) => ContraceptiveReminderCreateFormInputValues;
    onSuccess?: (fields: ContraceptiveReminderCreateFormInputValues) => void;
    onError?: (fields: ContraceptiveReminderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContraceptiveReminderCreateFormInputValues) => ContraceptiveReminderCreateFormInputValues;
    onValidate?: ContraceptiveReminderCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContraceptiveReminderCreateForm(props: ContraceptiveReminderCreateFormProps): React.ReactElement;
