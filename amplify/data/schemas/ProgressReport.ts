import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const ProgressReport = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    goalId: a.id(),
    goal: a.belongsTo(m.HealthGoal, "goalId"),
    reportDate: a.date(),
    reportDetails: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
