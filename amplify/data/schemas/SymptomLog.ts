import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const SymptomLog = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    date: a.date(),
    symptom: a.string(),
    severity: a.string(), // e.g., 'Mild', 'Moderate', 'Severe'
  })
  .authorization((allow) => [allow.owner()]);
