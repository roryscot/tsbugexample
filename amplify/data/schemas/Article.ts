import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const Article = a
  .model({
    uuid: a.string().required(),
    title: a.string(),
    content: a.string(),
    category: a.string(),
    publishedDate: a.date(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
  })
  .authorization((allow) => [allow.owner()]);
