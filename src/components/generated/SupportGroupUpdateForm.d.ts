import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SupportGroup } from "./graphql/types";
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
export declare type SupportGroupUpdateFormInputValues = {
    uuid?: string;
    groupName?: string;
    groupDescription?: string;
    membershipDate?: string;
};
export declare type SupportGroupUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    groupName?: ValidationFunction<string>;
    groupDescription?: ValidationFunction<string>;
    membershipDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportGroupUpdateFormOverridesProps = {
    SupportGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    groupName?: PrimitiveOverrideProps<TextFieldProps>;
    groupDescription?: PrimitiveOverrideProps<TextFieldProps>;
    membershipDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SupportGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: SupportGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    supportGroup?: SupportGroup;
    onSubmit?: (fields: SupportGroupUpdateFormInputValues) => SupportGroupUpdateFormInputValues;
    onSuccess?: (fields: SupportGroupUpdateFormInputValues) => void;
    onError?: (fields: SupportGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportGroupUpdateFormInputValues) => SupportGroupUpdateFormInputValues;
    onValidate?: SupportGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SupportGroupUpdateForm(props: SupportGroupUpdateFormProps): React.ReactElement;
