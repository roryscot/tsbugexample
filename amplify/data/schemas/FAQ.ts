import { a } from "@aws-amplify/backend";

export const FAQ = a
  .model({
    uuid: a.string().required(),
    question: a.string(),
    answer: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
