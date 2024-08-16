import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const PredictiveAnalytics = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    prediction: a.string(),
    date: a.date(),
  })
  .authorization((allow) => [allow.owner()]);
