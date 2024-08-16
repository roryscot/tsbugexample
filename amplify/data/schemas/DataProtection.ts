import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const DataProtection = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    dataType: a.string(),
    protectionStatus: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
