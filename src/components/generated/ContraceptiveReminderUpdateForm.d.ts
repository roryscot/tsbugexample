import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContraceptiveReminder } from "./graphql/types";
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
export declare type ContraceptiveReminderUpdateFormInputValues = {
    uuid?: string;
    contraceptiveMethod?: string;
    reminderTime?: string;
    status?: string;
};
export declare type ContraceptiveReminderUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    contraceptiveMethod?: ValidationFunction<string>;
    reminderTime?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContraceptiveReminderUpdateFormOverridesProps = {
    ContraceptiveReminderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    contraceptiveMethod?: PrimitiveOverrideProps<TextFieldProps>;
    reminderTime?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContraceptiveReminderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContraceptiveReminderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contraceptiveReminder?: ContraceptiveReminder;
    onSubmit?: (fields: ContraceptiveReminderUpdateFormInputValues) => ContraceptiveReminderUpdateFormInputValues;
    onSuccess?: (fields: ContraceptiveReminderUpdateFormInputValues) => void;
    onError?: (fields: ContraceptiveReminderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContraceptiveReminderUpdateFormInputValues) => ContraceptiveReminderUpdateFormInputValues;
    onValidate?: ContraceptiveReminderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContraceptiveReminderUpdateForm(props: ContraceptiveReminderUpdateFormProps): React.ReactElement;
