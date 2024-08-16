import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const BasalBodyTemperature = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    date: a.date(),
    temperature: a.float(),
  })
  .authorization((allow) => [allow.owner()]);
