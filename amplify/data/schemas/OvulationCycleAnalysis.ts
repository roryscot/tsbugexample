import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const OvulationCycleAnalysis = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    cycleId: a.id(),
    cycle: a.belongsTo(m.OvulationCycle, "cycleId"),
    analysis: a.string(),
    date: a.date(),
  })
  .authorization((allow) => [allow.owner()]);
