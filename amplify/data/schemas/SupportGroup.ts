import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const SupportGroup = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    groupName: a.string(),
    groupDescription: a.string(),
    membershipDate: a.date(),
  })
  .authorization((allow) => [allow.owner()]);
