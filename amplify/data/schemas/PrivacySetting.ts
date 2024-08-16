import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const PrivacySetting = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    settingName: a.string(),
    settingValue: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
