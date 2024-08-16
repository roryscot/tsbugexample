import { a } from "@aws-amplify/backend";
import { m } from "../models";

const OvulationTestResult = a.enum(["Positive", "Negative", "Indeterminate"]);
export const OvulationTest = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    date: a.date(),
    result: OvulationTestResult, // e.g., 'Positive', 'Negative'
  })
  .authorization((allow) => [allow.owner()]);
