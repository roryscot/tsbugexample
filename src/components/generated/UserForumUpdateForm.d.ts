import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserForum } from "./graphql/types";
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
export declare type UserForumUpdateFormInputValues = {
    uuid?: string;
    forumTopic?: string;
    postContent?: string;
    postDate?: string;
};
export declare type UserForumUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    forumTopic?: ValidationFunction<string>;
    postContent?: ValidationFunction<string>;
    postDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserForumUpdateFormOverridesProps = {
    UserForumUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    forumTopic?: PrimitiveOverrideProps<TextFieldProps>;
    postContent?: PrimitiveOverrideProps<TextFieldProps>;
    postDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserForumUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserForumUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userForum?: UserForum;
    onSubmit?: (fields: UserForumUpdateFormInputValues) => UserForumUpdateFormInputValues;
    onSuccess?: (fields: UserForumUpdateFormInputValues) => void;
    onError?: (fields: UserForumUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserForumUpdateFormInputValues) => UserForumUpdateFormInputValues;
    onValidate?: UserForumUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserForumUpdateForm(props: UserForumUpdateFormProps): React.ReactElement;
