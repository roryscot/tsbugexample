import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const WearableData = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    deviceId: a.string(),
    dataType: a.string(), // e.g., 'Activity', 'Sleep'
    dataValue: a.json(), // JSON format for data
    timestamp: a.datetime(),
  })
  .authorization((allow) => [allow.owner()]);
