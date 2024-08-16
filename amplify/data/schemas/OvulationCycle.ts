import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const OvulationCycle = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    analyses: a.hasMany(m.OvulationCycleAnalysis, "cycleId"),
    predictions: a.hasMany(m.OvulationPrediction, "cycleId"),
    fertilityWindows: a.hasMany(m.FertilityWindow, "cycleId"),
    menstrualHealthInsight: a.hasMany(m.MenstrualHealthInsight, "cycleId"),
    startDate: a.date(),
    endDate: a.date(),
    flowIntensity: a.string(), // e.g., 'Light', 'Moderate', 'Heavy'
    symptoms: a.json(), // JSON format for multiple symptoms
    cycleLength: a.integer(),
  })
  .authorization((allow) => [allow.owner()]);
