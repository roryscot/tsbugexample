import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const HealthGoal = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    progressReports: a.hasMany(m.ProgressReport, "goalId"),
    goalName: a.string(),
    goalDescription: a.string(),
    targetDate: a.date(),
    progress: a.string(), // e.g., 'Not Started', 'In Progress', 'Completed'
  })
  .authorization((allow) => [allow.owner()]);
