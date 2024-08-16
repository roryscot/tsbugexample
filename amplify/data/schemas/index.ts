import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../../functions/post-confirmation/resource";
import { UserProfile } from "./UserProfile";
import { OvulationCycle } from "./OvulationCycle";
import { OvulationPrediction } from "./OvulationPrediction";
import { HealthGoal } from "./HealthGoal";
import { OvulationCycleAnalysis } from "./OvulationCycleAnalysis";
import { WearableData } from "./WearableData";
import { DataProtection } from "./DataProtection";
import { PredictiveAnalytics } from "./PredictiveAnalytics";
import { MenstrualHealthInsight } from "./MenstrualHealthInsight";
import { FertilityWindow } from "./FertilityWindow";
import { BasalBodyTemperature } from "./BasalBodyTemperature";
import { OvulationTest } from "./OvulationTest";
import { ContraceptiveReminder } from "./ContraceptiveReminder";
import { ContraceptiveMethod } from "./ContraceptiveMethod";
import { SymptomLog } from "./SymptomLog";
import { MedicationLog } from "./MedicationLog";
import { Article } from "./Article";
import { FAQ } from "./FAQ";
import { AutomatedUpdate } from "./AutomatedUpdate";
import { UserForum } from "./UserForum";
import { SupportGroup } from "./SupportGroup";
import { PrivacySetting } from "./PrivacySetting";
import { ProgressReport } from "./ProgressReport";

const SCHEMA = a
  .schema({
    Article,
    AutomatedUpdate,
    BasalBodyTemperature,
    ContraceptiveMethod,
    ContraceptiveReminder,
    DataProtection,
    FAQ,
    FertilityWindow,
    HealthGoal,
    MedicationLog,
    MenstrualHealthInsight,
    OvulationCycle,
    OvulationCycleAnalysis,
    OvulationPrediction,
    OvulationTest,
    PredictiveAnalytics,
    PrivacySetting,
    ProgressReport,
    SupportGroup,
    SymptomLog,
    UserForum,
    UserProfile,
    WearableData,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
