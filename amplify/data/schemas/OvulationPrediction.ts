import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const OvulationPrediction = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    cycleId: a.id(),
    cycle: a.belongsTo(m.OvulationCycle, "cycleId"),
    predictedOvulationDate: a.date(),
    notes: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
