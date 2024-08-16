import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const UserForum = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    forumTopic: a.string(),
    postContent: a.string(),
    postDate: a.datetime(),
  })
  .authorization((allow) => [allow.owner()]);
