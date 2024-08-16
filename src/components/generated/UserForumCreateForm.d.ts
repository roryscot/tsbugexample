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
export declare type UserForumCreateFormInputValues = {
    uuid?: string;
    forumTopic?: string;
    postContent?: string;
    postDate?: string;
};
export declare type UserForumCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    forumTopic?: ValidationFunction<string>;
    postContent?: ValidationFunction<string>;
    postDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserForumCreateFormOverridesProps = {
    UserForumCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    forumTopic?: PrimitiveOverrideProps<TextFieldProps>;
    postContent?: PrimitiveOverrideProps<TextFieldProps>;
    postDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserForumCreateFormProps = React.PropsWithChildren<{
    overrides?: UserForumCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserForumCreateFormInputValues) => UserForumCreateFormInputValues;
    onSuccess?: (fields: UserForumCreateFormInputValues) => void;
    onError?: (fields: UserForumCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserForumCreateFormInputValues) => UserForumCreateFormInputValues;
    onValidate?: UserForumCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserForumCreateForm(props: UserForumCreateFormProps): React.ReactElement;
