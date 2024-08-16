import { type Schema } from "./schemas";

// Enum of models on schema
export enum m {
  Article = "Article",
  AutomatedUpdate = "AutomatedUpdate",
  BasalBodyTemperature = "BasalBodyTemperature",
  ContraceptiveMethod = "ContraceptiveMethod",
  ContraceptiveReminder = "ContraceptiveReminder",
  DataProtection = "DataProtection",
  FAQ = "FAQ",
  FertilityWindow = "FertilityWindow",
  HealthGoal = "HealthGoal",
  MedicationLog = "MedicationLog",
  MenstrualHealthInsight = "MenstrualHealthInsight",
  OvulationCycle = "OvulationCycle",
  OvulationCycleAnalysis = "OvulationCycleAnalysis",
  OvulationPrediction = "OvulationPrediction",
  OvulationTest = "OvulationTest",
  PredictiveAnalytics = "PredictiveAnalytics",
  PrivacySetting = "PrivacySetting",
  ProgressReport = "ProgressReport",
  SupportGroup = "SupportGroup",
  SymptomLog = "SymptomLog",
  UserForum = "UserForum",
  UserProfile = "UserProfile",
  WearableData = "WearableData",
}

// Define an object that maps m keys to their respective types
type SchemaTypeMap = {
  [Key in m]: Schema[Key]["type"];
};

// Extract the types for each m key
export type Models = {
  [Key in keyof SchemaTypeMap]: SchemaTypeMap[Key];
};

export type _Article = Models[m.Article];
export type _AutomatedUpdate = Models[m.AutomatedUpdate];
export type _BasalBodyTemperature = Models[m.BasalBodyTemperature];
export type _ContraceptiveMethod = Models[m.ContraceptiveMethod];
export type _ContraceptiveReminder = Models[m.ContraceptiveReminder];
export type _DataProtection = Models[m.DataProtection];
export type _FAQ = Models[m.FAQ];
export type _FertilityWindow = Models[m.FertilityWindow];
export type _HealthGoal = Models[m.HealthGoal];
export type _MedicationLog = Models[m.MedicationLog];
export type _MenstrualHealthInsight = Models[m.MenstrualHealthInsight];
export type _OvulationCycle = Models[m.OvulationCycle];
export type _OvulationCycleAnalysis = Models[m.OvulationCycleAnalysis];
export type _OvulationPrediction = Models[m.OvulationPrediction];
export type _OvulationTest = Models[m.OvulationTest];
export type _PredictiveAnalytics = Models[m.PredictiveAnalytics];
export type _PrivacySetting = Models[m.PrivacySetting];
export type _ProgressReport = Models[m.ProgressReport];
export type _SupportGroup = Models[m.SupportGroup];
export type _SymptomLog = Models[m.SymptomLog];
export type _UserForum = Models[m.UserForum];
export type _UserProfile = Models[m.UserProfile];
export type _WearableData = Models[m.WearableData];
