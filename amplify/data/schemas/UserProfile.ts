import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const DefaultPrivacyLevel = a.enum(["public", "private", "contacts"]);

export const UserProfile = a
  .model({
    uuid: a.string().required(),
    email: a.string(),
    profileOwner: a.string(),
    avatar: a.string(),
    birthday: a.date(),
    ovulationCycles: a.hasMany(m.OvulationCycle, "userProfileId"),
    ovulationPredictions: a.hasMany(m.OvulationPrediction, "userProfileId"),
    menstrualHealthInsights: a.hasMany(
      m.MenstrualHealthInsight,
      "userProfileId"
    ),
    fertilityWindows: a.hasMany(m.FertilityWindow, "userProfileId"),
    basalBodyTemperatures: a.hasMany(m.BasalBodyTemperature, "userProfileId"),
    ovulationTests: a.hasMany(m.OvulationTest, "userProfileId"),
    contraceptiveReminders: a.hasMany(m.ContraceptiveReminder, "userProfileId"),
    contraceptiveMethods: a.hasMany(m.ContraceptiveMethod, "userProfileId"),
    symptomLogs: a.hasMany(m.SymptomLog, "userProfileId"),
    medicationLogs: a.hasMany(m.MedicationLog, "userProfileId"),
    articles: a.hasMany(m.Article, "userProfileId"),
    OvulationCycleAnalysis: a.hasMany(
      m.OvulationCycleAnalysis,
      "userProfileId"
    ),
    predictiveAnalytics: a.hasMany(m.PredictiveAnalytics, "userProfileId"),
    wearableData: a.hasMany(m.WearableData, "userProfileId"),
    automatedUpdates: a.hasMany(m.AutomatedUpdate, "userProfileId"),
    userForums: a.hasMany(m.UserForum, "userProfileId"),
    supportGroups: a.hasMany(m.SupportGroup, "userProfileId"),
    privacySettings: a.hasMany(m.PrivacySetting, "userProfileId"),
    dataProtections: a.hasMany(m.DataProtection, "userProfileId"),
    healthGoals: a.hasMany(m.HealthGoal, "userProfileId"),
    progressReports: a.hasMany(m.ProgressReport, "userProfileId"),
  })
  .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]);
