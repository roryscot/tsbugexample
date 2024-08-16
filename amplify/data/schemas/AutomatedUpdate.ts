import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const AutomatedUpdate = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    updateType: a.string(),
    updateData: a.json(), // JSON format for update data
    timestamp: a.datetime(),
  })
  .authorization((allow) => [allow.owner()]);
