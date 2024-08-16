/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Article = {
  __typename: "Article",
  category?: string | null,
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  publishedDate?: string | null,
  title?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  OvulationCycleAnalysis?: ModelOvulationCycleAnalysisConnection | null,
  articles?: ModelArticleConnection | null,
  automatedUpdates?: ModelAutomatedUpdateConnection | null,
  avatar?: string | null,
  basalBodyTemperatures?: ModelBasalBodyTemperatureConnection | null,
  birthday?: string | null,
  contraceptiveMethods?: ModelContraceptiveMethodConnection | null,
  contraceptiveReminders?: ModelContraceptiveReminderConnection | null,
  createdAt: string,
  dataProtections?: ModelDataProtectionConnection | null,
  email?: string | null,
  fertilityWindows?: ModelFertilityWindowConnection | null,
  healthGoals?: ModelHealthGoalConnection | null,
  id: string,
  medicationLogs?: ModelMedicationLogConnection | null,
  menstrualHealthInsights?: ModelMenstrualHealthInsightConnection | null,
  ovulationCycles?: ModelOvulationCycleConnection | null,
  ovulationPredictions?: ModelOvulationPredictionConnection | null,
  ovulationTests?: ModelOvulationTestConnection | null,
  predictiveAnalytics?: ModelPredictiveAnalyticsConnection | null,
  privacySettings?: ModelPrivacySettingConnection | null,
  profileOwner?: string | null,
  progressReports?: ModelProgressReportConnection | null,
  supportGroups?: ModelSupportGroupConnection | null,
  symptomLogs?: ModelSymptomLogConnection | null,
  updatedAt: string,
  userForums?: ModelUserForumConnection | null,
  uuid: string,
  wearableData?: ModelWearableDataConnection | null,
};

export type ModelOvulationCycleAnalysisConnection = {
  __typename: "ModelOvulationCycleAnalysisConnection",
  items:  Array<OvulationCycleAnalysis | null >,
  nextToken?: string | null,
};

export type OvulationCycleAnalysis = {
  __typename: "OvulationCycleAnalysis",
  analysis?: string | null,
  createdAt: string,
  cycle?: OvulationCycle | null,
  cycleId?: string | null,
  date?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type OvulationCycle = {
  __typename: "OvulationCycle",
  analyses?: ModelOvulationCycleAnalysisConnection | null,
  createdAt: string,
  cycleLength?: number | null,
  endDate?: string | null,
  fertilityWindows?: ModelFertilityWindowConnection | null,
  flowIntensity?: string | null,
  id: string,
  menstrualHealthInsight?: ModelMenstrualHealthInsightConnection | null,
  owner?: string | null,
  predictions?: ModelOvulationPredictionConnection | null,
  startDate?: string | null,
  symptoms?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelFertilityWindowConnection = {
  __typename: "ModelFertilityWindowConnection",
  items:  Array<FertilityWindow | null >,
  nextToken?: string | null,
};

export type FertilityWindow = {
  __typename: "FertilityWindow",
  createdAt: string,
  cycle?: OvulationCycle | null,
  cycleId?: string | null,
  endDate?: string | null,
  id: string,
  owner?: string | null,
  startDate?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelMenstrualHealthInsightConnection = {
  __typename: "ModelMenstrualHealthInsightConnection",
  items:  Array<MenstrualHealthInsight | null >,
  nextToken?: string | null,
};

export type MenstrualHealthInsight = {
  __typename: "MenstrualHealthInsight",
  createdAt: string,
  cycle?: OvulationCycle | null,
  cycleId?: string | null,
  date?: string | null,
  id: string,
  insight?: string | null,
  owner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationPredictionConnection = {
  __typename: "ModelOvulationPredictionConnection",
  items:  Array<OvulationPrediction | null >,
  nextToken?: string | null,
};

export type OvulationPrediction = {
  __typename: "OvulationPrediction",
  createdAt: string,
  cycle?: OvulationCycle | null,
  cycleId?: string | null,
  id: string,
  notes?: string | null,
  owner?: string | null,
  predictedOvulationDate?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelAutomatedUpdateConnection = {
  __typename: "ModelAutomatedUpdateConnection",
  items:  Array<AutomatedUpdate | null >,
  nextToken?: string | null,
};

export type AutomatedUpdate = {
  __typename: "AutomatedUpdate",
  createdAt: string,
  id: string,
  owner?: string | null,
  timestamp?: string | null,
  updateData?: string | null,
  updateType?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelBasalBodyTemperatureConnection = {
  __typename: "ModelBasalBodyTemperatureConnection",
  items:  Array<BasalBodyTemperature | null >,
  nextToken?: string | null,
};

export type BasalBodyTemperature = {
  __typename: "BasalBodyTemperature",
  createdAt: string,
  date?: string | null,
  id: string,
  owner?: string | null,
  temperature?: number | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelContraceptiveMethodConnection = {
  __typename: "ModelContraceptiveMethodConnection",
  items:  Array<ContraceptiveMethod | null >,
  nextToken?: string | null,
};

export type ContraceptiveMethod = {
  __typename: "ContraceptiveMethod",
  createdAt: string,
  description?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
  sideEffects?: Array< string | null > | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelContraceptiveReminderConnection = {
  __typename: "ModelContraceptiveReminderConnection",
  items:  Array<ContraceptiveReminder | null >,
  nextToken?: string | null,
};

export type ContraceptiveReminder = {
  __typename: "ContraceptiveReminder",
  contraceptiveMethod?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  reminderTime?: string | null,
  status?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelDataProtectionConnection = {
  __typename: "ModelDataProtectionConnection",
  items:  Array<DataProtection | null >,
  nextToken?: string | null,
};

export type DataProtection = {
  __typename: "DataProtection",
  createdAt: string,
  dataType?: string | null,
  id: string,
  owner?: string | null,
  protectionStatus?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelHealthGoalConnection = {
  __typename: "ModelHealthGoalConnection",
  items:  Array<HealthGoal | null >,
  nextToken?: string | null,
};

export type HealthGoal = {
  __typename: "HealthGoal",
  createdAt: string,
  goalDescription?: string | null,
  goalName?: string | null,
  id: string,
  owner?: string | null,
  progress?: string | null,
  progressReports?: ModelProgressReportConnection | null,
  targetDate?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelProgressReportConnection = {
  __typename: "ModelProgressReportConnection",
  items:  Array<ProgressReport | null >,
  nextToken?: string | null,
};

export type ProgressReport = {
  __typename: "ProgressReport",
  createdAt: string,
  goal?: HealthGoal | null,
  goalId?: string | null,
  id: string,
  owner?: string | null,
  reportDate?: string | null,
  reportDetails?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelMedicationLogConnection = {
  __typename: "ModelMedicationLogConnection",
  items:  Array<MedicationLog | null >,
  nextToken?: string | null,
};

export type MedicationLog = {
  __typename: "MedicationLog",
  createdAt: string,
  dose?: string | null,
  endDate?: string | null,
  id: string,
  medicationName?: string | null,
  notes?: string | null,
  owner?: string | null,
  startDate?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationCycleConnection = {
  __typename: "ModelOvulationCycleConnection",
  items:  Array<OvulationCycle | null >,
  nextToken?: string | null,
};

export type ModelOvulationTestConnection = {
  __typename: "ModelOvulationTestConnection",
  items:  Array<OvulationTest | null >,
  nextToken?: string | null,
};

export type OvulationTest = {
  __typename: "OvulationTest",
  createdAt: string,
  date?: string | null,
  id: string,
  owner?: string | null,
  result?: OvulationTestResult | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export enum OvulationTestResult {
  Indeterminate = "Indeterminate",
  Negative = "Negative",
  Positive = "Positive",
}


export type ModelPredictiveAnalyticsConnection = {
  __typename: "ModelPredictiveAnalyticsConnection",
  items:  Array<PredictiveAnalytics | null >,
  nextToken?: string | null,
};

export type PredictiveAnalytics = {
  __typename: "PredictiveAnalytics",
  createdAt: string,
  date?: string | null,
  id: string,
  owner?: string | null,
  prediction?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelPrivacySettingConnection = {
  __typename: "ModelPrivacySettingConnection",
  items:  Array<PrivacySetting | null >,
  nextToken?: string | null,
};

export type PrivacySetting = {
  __typename: "PrivacySetting",
  createdAt: string,
  id: string,
  owner?: string | null,
  settingName?: string | null,
  settingValue?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelSupportGroupConnection = {
  __typename: "ModelSupportGroupConnection",
  items:  Array<SupportGroup | null >,
  nextToken?: string | null,
};

export type SupportGroup = {
  __typename: "SupportGroup",
  createdAt: string,
  groupDescription?: string | null,
  groupName?: string | null,
  id: string,
  membershipDate?: string | null,
  owner?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelSymptomLogConnection = {
  __typename: "ModelSymptomLogConnection",
  items:  Array<SymptomLog | null >,
  nextToken?: string | null,
};

export type SymptomLog = {
  __typename: "SymptomLog",
  createdAt: string,
  date?: string | null,
  id: string,
  owner?: string | null,
  severity?: string | null,
  symptom?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelUserForumConnection = {
  __typename: "ModelUserForumConnection",
  items:  Array<UserForum | null >,
  nextToken?: string | null,
};

export type UserForum = {
  __typename: "UserForum",
  createdAt: string,
  forumTopic?: string | null,
  id: string,
  owner?: string | null,
  postContent?: string | null,
  postDate?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelWearableDataConnection = {
  __typename: "ModelWearableDataConnection",
  items:  Array<WearableData | null >,
  nextToken?: string | null,
};

export type WearableData = {
  __typename: "WearableData",
  createdAt: string,
  dataType?: string | null,
  dataValue?: string | null,
  deviceId?: string | null,
  id: string,
  owner?: string | null,
  timestamp?: string | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId?: string | null,
  uuid: string,
};

export type FAQ = {
  __typename: "FAQ",
  answer?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  question?: string | null,
  updatedAt: string,
  uuid: string,
};

export type ModelArticleFilterInput = {
  and?: Array< ModelArticleFilterInput | null > | null,
  category?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelArticleFilterInput | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  publishedDate?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelAutomatedUpdateFilterInput = {
  and?: Array< ModelAutomatedUpdateFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelAutomatedUpdateFilterInput | null,
  or?: Array< ModelAutomatedUpdateFilterInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  updateData?: ModelStringInput | null,
  updateType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelBasalBodyTemperatureFilterInput = {
  and?: Array< ModelBasalBodyTemperatureFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelBasalBodyTemperatureFilterInput | null,
  or?: Array< ModelBasalBodyTemperatureFilterInput | null > | null,
  owner?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelContraceptiveMethodFilterInput = {
  and?: Array< ModelContraceptiveMethodFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelContraceptiveMethodFilterInput | null,
  or?: Array< ModelContraceptiveMethodFilterInput | null > | null,
  owner?: ModelStringInput | null,
  sideEffects?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelContraceptiveReminderFilterInput = {
  and?: Array< ModelContraceptiveReminderFilterInput | null > | null,
  contraceptiveMethod?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelContraceptiveReminderFilterInput | null,
  or?: Array< ModelContraceptiveReminderFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reminderTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelDataProtectionFilterInput = {
  and?: Array< ModelDataProtectionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelDataProtectionFilterInput | null,
  or?: Array< ModelDataProtectionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  protectionStatus?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelFAQFilterInput = {
  and?: Array< ModelFAQFilterInput | null > | null,
  answer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelFAQFilterInput | null,
  or?: Array< ModelFAQFilterInput | null > | null,
  owner?: ModelStringInput | null,
  question?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelFAQConnection = {
  __typename: "ModelFAQConnection",
  items:  Array<FAQ | null >,
  nextToken?: string | null,
};

export type ModelFertilityWindowFilterInput = {
  and?: Array< ModelFertilityWindowFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  endDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelFertilityWindowFilterInput | null,
  or?: Array< ModelFertilityWindowFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelHealthGoalFilterInput = {
  and?: Array< ModelHealthGoalFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  goalDescription?: ModelStringInput | null,
  goalName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelHealthGoalFilterInput | null,
  or?: Array< ModelHealthGoalFilterInput | null > | null,
  owner?: ModelStringInput | null,
  progress?: ModelStringInput | null,
  targetDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelMedicationLogFilterInput = {
  and?: Array< ModelMedicationLogFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  dose?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  medicationName?: ModelStringInput | null,
  not?: ModelMedicationLogFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelMedicationLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelMenstrualHealthInsightFilterInput = {
  and?: Array< ModelMenstrualHealthInsightFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  insight?: ModelStringInput | null,
  not?: ModelMenstrualHealthInsightFilterInput | null,
  or?: Array< ModelMenstrualHealthInsightFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelOvulationCycleAnalysisFilterInput = {
  analysis?: ModelStringInput | null,
  and?: Array< ModelOvulationCycleAnalysisFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOvulationCycleAnalysisFilterInput | null,
  or?: Array< ModelOvulationCycleAnalysisFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelOvulationCycleFilterInput = {
  and?: Array< ModelOvulationCycleFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleLength?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  flowIntensity?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOvulationCycleFilterInput | null,
  or?: Array< ModelOvulationCycleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  symptoms?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelOvulationPredictionFilterInput = {
  and?: Array< ModelOvulationPredictionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelOvulationPredictionFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelOvulationPredictionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  predictedOvulationDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelOvulationTestFilterInput = {
  and?: Array< ModelOvulationTestFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOvulationTestFilterInput | null,
  or?: Array< ModelOvulationTestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  result?: ModelOvulationTestResultInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelOvulationTestResultInput = {
  eq?: OvulationTestResult | null,
  ne?: OvulationTestResult | null,
};

export type ModelPredictiveAnalyticsFilterInput = {
  and?: Array< ModelPredictiveAnalyticsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPredictiveAnalyticsFilterInput | null,
  or?: Array< ModelPredictiveAnalyticsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  prediction?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelPrivacySettingFilterInput = {
  and?: Array< ModelPrivacySettingFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPrivacySettingFilterInput | null,
  or?: Array< ModelPrivacySettingFilterInput | null > | null,
  owner?: ModelStringInput | null,
  settingName?: ModelStringInput | null,
  settingValue?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelProgressReportFilterInput = {
  and?: Array< ModelProgressReportFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  goalId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelProgressReportFilterInput | null,
  or?: Array< ModelProgressReportFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reportDate?: ModelStringInput | null,
  reportDetails?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelSupportGroupFilterInput = {
  and?: Array< ModelSupportGroupFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  groupDescription?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  membershipDate?: ModelStringInput | null,
  not?: ModelSupportGroupFilterInput | null,
  or?: Array< ModelSupportGroupFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelSymptomLogFilterInput = {
  and?: Array< ModelSymptomLogFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelSymptomLogFilterInput | null,
  or?: Array< ModelSymptomLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  severity?: ModelStringInput | null,
  symptom?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelUserForumFilterInput = {
  and?: Array< ModelUserForumFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  forumTopic?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserForumFilterInput | null,
  or?: Array< ModelUserForumFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postContent?: ModelStringInput | null,
  postDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  avatar?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelWearableDataFilterInput = {
  and?: Array< ModelWearableDataFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  dataValue?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelWearableDataFilterInput | null,
  or?: Array< ModelWearableDataFilterInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type ModelArticleConditionInput = {
  and?: Array< ModelArticleConditionInput | null > | null,
  category?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelArticleConditionInput | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  owner?: ModelStringInput | null,
  publishedDate?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateArticleInput = {
  category?: string | null,
  content?: string | null,
  id?: string | null,
  publishedDate?: string | null,
  title?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelAutomatedUpdateConditionInput = {
  and?: Array< ModelAutomatedUpdateConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelAutomatedUpdateConditionInput | null,
  or?: Array< ModelAutomatedUpdateConditionInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  updateData?: ModelStringInput | null,
  updateType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateAutomatedUpdateInput = {
  id?: string | null,
  timestamp?: string | null,
  updateData?: string | null,
  updateType?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelBasalBodyTemperatureConditionInput = {
  and?: Array< ModelBasalBodyTemperatureConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelBasalBodyTemperatureConditionInput | null,
  or?: Array< ModelBasalBodyTemperatureConditionInput | null > | null,
  owner?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateBasalBodyTemperatureInput = {
  date?: string | null,
  id?: string | null,
  temperature?: number | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelContraceptiveMethodConditionInput = {
  and?: Array< ModelContraceptiveMethodConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelContraceptiveMethodConditionInput | null,
  or?: Array< ModelContraceptiveMethodConditionInput | null > | null,
  owner?: ModelStringInput | null,
  sideEffects?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateContraceptiveMethodInput = {
  description?: string | null,
  id?: string | null,
  name?: string | null,
  sideEffects?: Array< string | null > | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelContraceptiveReminderConditionInput = {
  and?: Array< ModelContraceptiveReminderConditionInput | null > | null,
  contraceptiveMethod?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelContraceptiveReminderConditionInput | null,
  or?: Array< ModelContraceptiveReminderConditionInput | null > | null,
  owner?: ModelStringInput | null,
  reminderTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateContraceptiveReminderInput = {
  contraceptiveMethod?: string | null,
  id?: string | null,
  reminderTime?: string | null,
  status?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelDataProtectionConditionInput = {
  and?: Array< ModelDataProtectionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  not?: ModelDataProtectionConditionInput | null,
  or?: Array< ModelDataProtectionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  protectionStatus?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateDataProtectionInput = {
  dataType?: string | null,
  id?: string | null,
  protectionStatus?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelFAQConditionInput = {
  and?: Array< ModelFAQConditionInput | null > | null,
  answer?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelFAQConditionInput | null,
  or?: Array< ModelFAQConditionInput | null > | null,
  owner?: ModelStringInput | null,
  question?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateFAQInput = {
  answer?: string | null,
  id?: string | null,
  question?: string | null,
  uuid: string,
};

export type ModelFertilityWindowConditionInput = {
  and?: Array< ModelFertilityWindowConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  endDate?: ModelStringInput | null,
  not?: ModelFertilityWindowConditionInput | null,
  or?: Array< ModelFertilityWindowConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateFertilityWindowInput = {
  cycleId?: string | null,
  endDate?: string | null,
  id?: string | null,
  startDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelHealthGoalConditionInput = {
  and?: Array< ModelHealthGoalConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  goalDescription?: ModelStringInput | null,
  goalName?: ModelStringInput | null,
  not?: ModelHealthGoalConditionInput | null,
  or?: Array< ModelHealthGoalConditionInput | null > | null,
  owner?: ModelStringInput | null,
  progress?: ModelStringInput | null,
  targetDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateHealthGoalInput = {
  goalDescription?: string | null,
  goalName?: string | null,
  id?: string | null,
  progress?: string | null,
  targetDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelMedicationLogConditionInput = {
  and?: Array< ModelMedicationLogConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  dose?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  medicationName?: ModelStringInput | null,
  not?: ModelMedicationLogConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelMedicationLogConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateMedicationLogInput = {
  dose?: string | null,
  endDate?: string | null,
  id?: string | null,
  medicationName?: string | null,
  notes?: string | null,
  startDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelMenstrualHealthInsightConditionInput = {
  and?: Array< ModelMenstrualHealthInsightConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  insight?: ModelStringInput | null,
  not?: ModelMenstrualHealthInsightConditionInput | null,
  or?: Array< ModelMenstrualHealthInsightConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateMenstrualHealthInsightInput = {
  cycleId?: string | null,
  date?: string | null,
  id?: string | null,
  insight?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationCycleConditionInput = {
  and?: Array< ModelOvulationCycleConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleLength?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  flowIntensity?: ModelStringInput | null,
  not?: ModelOvulationCycleConditionInput | null,
  or?: Array< ModelOvulationCycleConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  symptoms?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateOvulationCycleInput = {
  cycleLength?: number | null,
  endDate?: string | null,
  flowIntensity?: string | null,
  id?: string | null,
  startDate?: string | null,
  symptoms?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationCycleAnalysisConditionInput = {
  analysis?: ModelStringInput | null,
  and?: Array< ModelOvulationCycleAnalysisConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  not?: ModelOvulationCycleAnalysisConditionInput | null,
  or?: Array< ModelOvulationCycleAnalysisConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateOvulationCycleAnalysisInput = {
  analysis?: string | null,
  cycleId?: string | null,
  date?: string | null,
  id?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationPredictionConditionInput = {
  and?: Array< ModelOvulationPredictionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  cycleId?: ModelIDInput | null,
  not?: ModelOvulationPredictionConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelOvulationPredictionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  predictedOvulationDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateOvulationPredictionInput = {
  cycleId?: string | null,
  id?: string | null,
  notes?: string | null,
  predictedOvulationDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelOvulationTestConditionInput = {
  and?: Array< ModelOvulationTestConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelOvulationTestConditionInput | null,
  or?: Array< ModelOvulationTestConditionInput | null > | null,
  owner?: ModelStringInput | null,
  result?: ModelOvulationTestResultInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateOvulationTestInput = {
  date?: string | null,
  id?: string | null,
  result?: OvulationTestResult | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelPredictiveAnalyticsConditionInput = {
  and?: Array< ModelPredictiveAnalyticsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelPredictiveAnalyticsConditionInput | null,
  or?: Array< ModelPredictiveAnalyticsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  prediction?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreatePredictiveAnalyticsInput = {
  date?: string | null,
  id?: string | null,
  prediction?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelPrivacySettingConditionInput = {
  and?: Array< ModelPrivacySettingConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPrivacySettingConditionInput | null,
  or?: Array< ModelPrivacySettingConditionInput | null > | null,
  owner?: ModelStringInput | null,
  settingName?: ModelStringInput | null,
  settingValue?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreatePrivacySettingInput = {
  id?: string | null,
  settingName?: string | null,
  settingValue?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelProgressReportConditionInput = {
  and?: Array< ModelProgressReportConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  goalId?: ModelIDInput | null,
  not?: ModelProgressReportConditionInput | null,
  or?: Array< ModelProgressReportConditionInput | null > | null,
  owner?: ModelStringInput | null,
  reportDate?: ModelStringInput | null,
  reportDetails?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateProgressReportInput = {
  goalId?: string | null,
  id?: string | null,
  reportDate?: string | null,
  reportDetails?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelSupportGroupConditionInput = {
  and?: Array< ModelSupportGroupConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  groupDescription?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  membershipDate?: ModelStringInput | null,
  not?: ModelSupportGroupConditionInput | null,
  or?: Array< ModelSupportGroupConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateSupportGroupInput = {
  groupDescription?: string | null,
  groupName?: string | null,
  id?: string | null,
  membershipDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelSymptomLogConditionInput = {
  and?: Array< ModelSymptomLogConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelSymptomLogConditionInput | null,
  or?: Array< ModelSymptomLogConditionInput | null > | null,
  owner?: ModelStringInput | null,
  severity?: ModelStringInput | null,
  symptom?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateSymptomLogInput = {
  date?: string | null,
  id?: string | null,
  severity?: string | null,
  symptom?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelUserForumConditionInput = {
  and?: Array< ModelUserForumConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  forumTopic?: ModelStringInput | null,
  not?: ModelUserForumConditionInput | null,
  or?: Array< ModelUserForumConditionInput | null > | null,
  owner?: ModelStringInput | null,
  postContent?: ModelStringInput | null,
  postDate?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateUserForumInput = {
  forumTopic?: string | null,
  id?: string | null,
  postContent?: string | null,
  postDate?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  avatar?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  avatar?: string | null,
  birthday?: string | null,
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
  uuid: string,
};

export type ModelWearableDataConditionInput = {
  and?: Array< ModelWearableDataConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataType?: ModelStringInput | null,
  dataValue?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  not?: ModelWearableDataConditionInput | null,
  or?: Array< ModelWearableDataConditionInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
};

export type CreateWearableDataInput = {
  dataType?: string | null,
  dataValue?: string | null,
  deviceId?: string | null,
  id?: string | null,
  timestamp?: string | null,
  userProfileId?: string | null,
  uuid: string,
};

export type DeleteArticleInput = {
  id: string,
};

export type DeleteAutomatedUpdateInput = {
  id: string,
};

export type DeleteBasalBodyTemperatureInput = {
  id: string,
};

export type DeleteContraceptiveMethodInput = {
  id: string,
};

export type DeleteContraceptiveReminderInput = {
  id: string,
};

export type DeleteDataProtectionInput = {
  id: string,
};

export type DeleteFAQInput = {
  id: string,
};

export type DeleteFertilityWindowInput = {
  id: string,
};

export type DeleteHealthGoalInput = {
  id: string,
};

export type DeleteMedicationLogInput = {
  id: string,
};

export type DeleteMenstrualHealthInsightInput = {
  id: string,
};

export type DeleteOvulationCycleInput = {
  id: string,
};

export type DeleteOvulationCycleAnalysisInput = {
  id: string,
};

export type DeleteOvulationPredictionInput = {
  id: string,
};

export type DeleteOvulationTestInput = {
  id: string,
};

export type DeletePredictiveAnalyticsInput = {
  id: string,
};

export type DeletePrivacySettingInput = {
  id: string,
};

export type DeleteProgressReportInput = {
  id: string,
};

export type DeleteSupportGroupInput = {
  id: string,
};

export type DeleteSymptomLogInput = {
  id: string,
};

export type DeleteUserForumInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type DeleteWearableDataInput = {
  id: string,
};

export type UpdateArticleInput = {
  category?: string | null,
  content?: string | null,
  id: string,
  publishedDate?: string | null,
  title?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateAutomatedUpdateInput = {
  id: string,
  timestamp?: string | null,
  updateData?: string | null,
  updateType?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateBasalBodyTemperatureInput = {
  date?: string | null,
  id: string,
  temperature?: number | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateContraceptiveMethodInput = {
  description?: string | null,
  id: string,
  name?: string | null,
  sideEffects?: Array< string | null > | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateContraceptiveReminderInput = {
  contraceptiveMethod?: string | null,
  id: string,
  reminderTime?: string | null,
  status?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateDataProtectionInput = {
  dataType?: string | null,
  id: string,
  protectionStatus?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateFAQInput = {
  answer?: string | null,
  id: string,
  question?: string | null,
  uuid?: string | null,
};

export type UpdateFertilityWindowInput = {
  cycleId?: string | null,
  endDate?: string | null,
  id: string,
  startDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateHealthGoalInput = {
  goalDescription?: string | null,
  goalName?: string | null,
  id: string,
  progress?: string | null,
  targetDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateMedicationLogInput = {
  dose?: string | null,
  endDate?: string | null,
  id: string,
  medicationName?: string | null,
  notes?: string | null,
  startDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateMenstrualHealthInsightInput = {
  cycleId?: string | null,
  date?: string | null,
  id: string,
  insight?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateOvulationCycleInput = {
  cycleLength?: number | null,
  endDate?: string | null,
  flowIntensity?: string | null,
  id: string,
  startDate?: string | null,
  symptoms?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateOvulationCycleAnalysisInput = {
  analysis?: string | null,
  cycleId?: string | null,
  date?: string | null,
  id: string,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateOvulationPredictionInput = {
  cycleId?: string | null,
  id: string,
  notes?: string | null,
  predictedOvulationDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateOvulationTestInput = {
  date?: string | null,
  id: string,
  result?: OvulationTestResult | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdatePredictiveAnalyticsInput = {
  date?: string | null,
  id: string,
  prediction?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdatePrivacySettingInput = {
  id: string,
  settingName?: string | null,
  settingValue?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateProgressReportInput = {
  goalId?: string | null,
  id: string,
  reportDate?: string | null,
  reportDetails?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateSupportGroupInput = {
  groupDescription?: string | null,
  groupName?: string | null,
  id: string,
  membershipDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateSymptomLogInput = {
  date?: string | null,
  id: string,
  severity?: string | null,
  symptom?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateUserForumInput = {
  forumTopic?: string | null,
  id: string,
  postContent?: string | null,
  postDate?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type UpdateUserProfileInput = {
  avatar?: string | null,
  birthday?: string | null,
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  uuid?: string | null,
};

export type UpdateWearableDataInput = {
  dataType?: string | null,
  dataValue?: string | null,
  deviceId?: string | null,
  id: string,
  timestamp?: string | null,
  userProfileId?: string | null,
  uuid?: string | null,
};

export type ModelSubscriptionArticleFilterInput = {
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  category?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  publishedDate?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAutomatedUpdateFilterInput = {
  and?: Array< ModelSubscriptionAutomatedUpdateFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionAutomatedUpdateFilterInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  updateData?: ModelSubscriptionStringInput | null,
  updateType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBasalBodyTemperatureFilterInput = {
  and?: Array< ModelSubscriptionBasalBodyTemperatureFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionBasalBodyTemperatureFilterInput | null > | null,
  owner?: ModelStringInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionContraceptiveMethodFilterInput = {
  and?: Array< ModelSubscriptionContraceptiveMethodFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionContraceptiveMethodFilterInput | null > | null,
  owner?: ModelStringInput | null,
  sideEffects?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionContraceptiveReminderFilterInput = {
  and?: Array< ModelSubscriptionContraceptiveReminderFilterInput | null > | null,
  contraceptiveMethod?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionContraceptiveReminderFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reminderTime?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionDataProtectionFilterInput = {
  and?: Array< ModelSubscriptionDataProtectionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dataType?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionDataProtectionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  protectionStatus?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFAQFilterInput = {
  and?: Array< ModelSubscriptionFAQFilterInput | null > | null,
  answer?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionFAQFilterInput | null > | null,
  owner?: ModelStringInput | null,
  question?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFertilityWindowFilterInput = {
  and?: Array< ModelSubscriptionFertilityWindowFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cycleId?: ModelSubscriptionIDInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionFertilityWindowFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionHealthGoalFilterInput = {
  and?: Array< ModelSubscriptionHealthGoalFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  goalDescription?: ModelSubscriptionStringInput | null,
  goalName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionHealthGoalFilterInput | null > | null,
  owner?: ModelStringInput | null,
  progress?: ModelSubscriptionStringInput | null,
  targetDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMedicationLogFilterInput = {
  and?: Array< ModelSubscriptionMedicationLogFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dose?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  medicationName?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionMedicationLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMenstrualHealthInsightFilterInput = {
  and?: Array< ModelSubscriptionMenstrualHealthInsightFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cycleId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  insight?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionMenstrualHealthInsightFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOvulationCycleFilterInput = {
  and?: Array< ModelSubscriptionOvulationCycleFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cycleLength?: ModelSubscriptionIntInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  flowIntensity?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOvulationCycleFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  symptoms?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOvulationCycleAnalysisFilterInput = {
  analysis?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOvulationCycleAnalysisFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cycleId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOvulationCycleAnalysisFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOvulationPredictionFilterInput = {
  and?: Array< ModelSubscriptionOvulationPredictionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cycleId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionOvulationPredictionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  predictedOvulationDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOvulationTestFilterInput = {
  and?: Array< ModelSubscriptionOvulationTestFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOvulationTestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPredictiveAnalyticsFilterInput = {
  and?: Array< ModelSubscriptionPredictiveAnalyticsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPredictiveAnalyticsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  prediction?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPrivacySettingFilterInput = {
  and?: Array< ModelSubscriptionPrivacySettingFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPrivacySettingFilterInput | null > | null,
  owner?: ModelStringInput | null,
  settingName?: ModelSubscriptionStringInput | null,
  settingValue?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionProgressReportFilterInput = {
  and?: Array< ModelSubscriptionProgressReportFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  goalId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionProgressReportFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reportDate?: ModelSubscriptionStringInput | null,
  reportDetails?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSupportGroupFilterInput = {
  and?: Array< ModelSubscriptionSupportGroupFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  groupDescription?: ModelSubscriptionStringInput | null,
  groupName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  membershipDate?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionSupportGroupFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSymptomLogFilterInput = {
  and?: Array< ModelSubscriptionSymptomLogFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionSymptomLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
  severity?: ModelSubscriptionStringInput | null,
  symptom?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserForumFilterInput = {
  and?: Array< ModelSubscriptionUserForumFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  forumTopic?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserForumFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postContent?: ModelSubscriptionStringInput | null,
  postDate?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  avatar?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionWearableDataFilterInput = {
  and?: Array< ModelSubscriptionWearableDataFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dataType?: ModelSubscriptionStringInput | null,
  dataValue?: ModelSubscriptionStringInput | null,
  deviceId?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionWearableDataFilterInput | null > | null,
  owner?: ModelStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetAutomatedUpdateQueryVariables = {
  id: string,
};

export type GetAutomatedUpdateQuery = {
  getAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetBasalBodyTemperatureQueryVariables = {
  id: string,
};

export type GetBasalBodyTemperatureQuery = {
  getBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetContraceptiveMethodQueryVariables = {
  id: string,
};

export type GetContraceptiveMethodQuery = {
  getContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetContraceptiveReminderQueryVariables = {
  id: string,
};

export type GetContraceptiveReminderQuery = {
  getContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetDataProtectionQueryVariables = {
  id: string,
};

export type GetDataProtectionQuery = {
  getDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetFAQQueryVariables = {
  id: string,
};

export type GetFAQQuery = {
  getFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type GetFertilityWindowQueryVariables = {
  id: string,
};

export type GetFertilityWindowQuery = {
  getFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetHealthGoalQueryVariables = {
  id: string,
};

export type GetHealthGoalQuery = {
  getHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetMedicationLogQueryVariables = {
  id: string,
};

export type GetMedicationLogQuery = {
  getMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetMenstrualHealthInsightQueryVariables = {
  id: string,
};

export type GetMenstrualHealthInsightQuery = {
  getMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetOvulationCycleQueryVariables = {
  id: string,
};

export type GetOvulationCycleQuery = {
  getOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetOvulationCycleAnalysisQueryVariables = {
  id: string,
};

export type GetOvulationCycleAnalysisQuery = {
  getOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetOvulationPredictionQueryVariables = {
  id: string,
};

export type GetOvulationPredictionQuery = {
  getOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetOvulationTestQueryVariables = {
  id: string,
};

export type GetOvulationTestQuery = {
  getOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetPredictiveAnalyticsQueryVariables = {
  id: string,
};

export type GetPredictiveAnalyticsQuery = {
  getPredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetPrivacySettingQueryVariables = {
  id: string,
};

export type GetPrivacySettingQuery = {
  getPrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetProgressReportQueryVariables = {
  id: string,
};

export type GetProgressReportQuery = {
  getProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetSupportGroupQueryVariables = {
  id: string,
};

export type GetSupportGroupQuery = {
  getSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetSymptomLogQueryVariables = {
  id: string,
};

export type GetSymptomLogQuery = {
  getSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetUserForumQueryVariables = {
  id: string,
};

export type GetUserForumQuery = {
  getUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetWearableDataQueryVariables = {
  id: string,
};

export type GetWearableDataQuery = {
  getWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      category?: string | null,
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      publishedDate?: string | null,
      title?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAutomatedUpdatesQueryVariables = {
  filter?: ModelAutomatedUpdateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAutomatedUpdatesQuery = {
  listAutomatedUpdates?:  {
    __typename: "ModelAutomatedUpdateConnection",
    items:  Array< {
      __typename: "AutomatedUpdate",
      createdAt: string,
      id: string,
      owner?: string | null,
      timestamp?: string | null,
      updateData?: string | null,
      updateType?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBasalBodyTemperaturesQueryVariables = {
  filter?: ModelBasalBodyTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasalBodyTemperaturesQuery = {
  listBasalBodyTemperatures?:  {
    __typename: "ModelBasalBodyTemperatureConnection",
    items:  Array< {
      __typename: "BasalBodyTemperature",
      createdAt: string,
      date?: string | null,
      id: string,
      owner?: string | null,
      temperature?: number | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContraceptiveMethodsQueryVariables = {
  filter?: ModelContraceptiveMethodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContraceptiveMethodsQuery = {
  listContraceptiveMethods?:  {
    __typename: "ModelContraceptiveMethodConnection",
    items:  Array< {
      __typename: "ContraceptiveMethod",
      createdAt: string,
      description?: string | null,
      id: string,
      name?: string | null,
      owner?: string | null,
      sideEffects?: Array< string | null > | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContraceptiveRemindersQueryVariables = {
  filter?: ModelContraceptiveReminderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContraceptiveRemindersQuery = {
  listContraceptiveReminders?:  {
    __typename: "ModelContraceptiveReminderConnection",
    items:  Array< {
      __typename: "ContraceptiveReminder",
      contraceptiveMethod?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      reminderTime?: string | null,
      status?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDataProtectionsQueryVariables = {
  filter?: ModelDataProtectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataProtectionsQuery = {
  listDataProtections?:  {
    __typename: "ModelDataProtectionConnection",
    items:  Array< {
      __typename: "DataProtection",
      createdAt: string,
      dataType?: string | null,
      id: string,
      owner?: string | null,
      protectionStatus?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFAQSQueryVariables = {
  filter?: ModelFAQFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFAQSQuery = {
  listFAQS?:  {
    __typename: "ModelFAQConnection",
    items:  Array< {
      __typename: "FAQ",
      answer?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      question?: string | null,
      updatedAt: string,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFertilityWindowsQueryVariables = {
  filter?: ModelFertilityWindowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFertilityWindowsQuery = {
  listFertilityWindows?:  {
    __typename: "ModelFertilityWindowConnection",
    items:  Array< {
      __typename: "FertilityWindow",
      createdAt: string,
      cycleId?: string | null,
      endDate?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListHealthGoalsQueryVariables = {
  filter?: ModelHealthGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHealthGoalsQuery = {
  listHealthGoals?:  {
    __typename: "ModelHealthGoalConnection",
    items:  Array< {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMedicationLogsQueryVariables = {
  filter?: ModelMedicationLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicationLogsQuery = {
  listMedicationLogs?:  {
    __typename: "ModelMedicationLogConnection",
    items:  Array< {
      __typename: "MedicationLog",
      createdAt: string,
      dose?: string | null,
      endDate?: string | null,
      id: string,
      medicationName?: string | null,
      notes?: string | null,
      owner?: string | null,
      startDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMenstrualHealthInsightsQueryVariables = {
  filter?: ModelMenstrualHealthInsightFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenstrualHealthInsightsQuery = {
  listMenstrualHealthInsights?:  {
    __typename: "ModelMenstrualHealthInsightConnection",
    items:  Array< {
      __typename: "MenstrualHealthInsight",
      createdAt: string,
      cycleId?: string | null,
      date?: string | null,
      id: string,
      insight?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOvulationCycleAnalysesQueryVariables = {
  filter?: ModelOvulationCycleAnalysisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOvulationCycleAnalysesQuery = {
  listOvulationCycleAnalyses?:  {
    __typename: "ModelOvulationCycleAnalysisConnection",
    items:  Array< {
      __typename: "OvulationCycleAnalysis",
      analysis?: string | null,
      createdAt: string,
      cycleId?: string | null,
      date?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOvulationCyclesQueryVariables = {
  filter?: ModelOvulationCycleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOvulationCyclesQuery = {
  listOvulationCycles?:  {
    __typename: "ModelOvulationCycleConnection",
    items:  Array< {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOvulationPredictionsQueryVariables = {
  filter?: ModelOvulationPredictionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOvulationPredictionsQuery = {
  listOvulationPredictions?:  {
    __typename: "ModelOvulationPredictionConnection",
    items:  Array< {
      __typename: "OvulationPrediction",
      createdAt: string,
      cycleId?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      predictedOvulationDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOvulationTestsQueryVariables = {
  filter?: ModelOvulationTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOvulationTestsQuery = {
  listOvulationTests?:  {
    __typename: "ModelOvulationTestConnection",
    items:  Array< {
      __typename: "OvulationTest",
      createdAt: string,
      date?: string | null,
      id: string,
      owner?: string | null,
      result?: OvulationTestResult | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPredictiveAnalyticsQueryVariables = {
  filter?: ModelPredictiveAnalyticsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPredictiveAnalyticsQuery = {
  listPredictiveAnalytics?:  {
    __typename: "ModelPredictiveAnalyticsConnection",
    items:  Array< {
      __typename: "PredictiveAnalytics",
      createdAt: string,
      date?: string | null,
      id: string,
      owner?: string | null,
      prediction?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPrivacySettingsQueryVariables = {
  filter?: ModelPrivacySettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivacySettingsQuery = {
  listPrivacySettings?:  {
    __typename: "ModelPrivacySettingConnection",
    items:  Array< {
      __typename: "PrivacySetting",
      createdAt: string,
      id: string,
      owner?: string | null,
      settingName?: string | null,
      settingValue?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProgressReportsQueryVariables = {
  filter?: ModelProgressReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgressReportsQuery = {
  listProgressReports?:  {
    __typename: "ModelProgressReportConnection",
    items:  Array< {
      __typename: "ProgressReport",
      createdAt: string,
      goalId?: string | null,
      id: string,
      owner?: string | null,
      reportDate?: string | null,
      reportDetails?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSupportGroupsQueryVariables = {
  filter?: ModelSupportGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSupportGroupsQuery = {
  listSupportGroups?:  {
    __typename: "ModelSupportGroupConnection",
    items:  Array< {
      __typename: "SupportGroup",
      createdAt: string,
      groupDescription?: string | null,
      groupName?: string | null,
      id: string,
      membershipDate?: string | null,
      owner?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSymptomLogsQueryVariables = {
  filter?: ModelSymptomLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSymptomLogsQuery = {
  listSymptomLogs?:  {
    __typename: "ModelSymptomLogConnection",
    items:  Array< {
      __typename: "SymptomLog",
      createdAt: string,
      date?: string | null,
      id: string,
      owner?: string | null,
      severity?: string | null,
      symptom?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserForumsQueryVariables = {
  filter?: ModelUserForumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserForumsQuery = {
  listUserForums?:  {
    __typename: "ModelUserForumConnection",
    items:  Array< {
      __typename: "UserForum",
      createdAt: string,
      forumTopic?: string | null,
      id: string,
      owner?: string | null,
      postContent?: string | null,
      postDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWearableDataQueryVariables = {
  filter?: ModelWearableDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWearableDataQuery = {
  listWearableData?:  {
    __typename: "ModelWearableDataConnection",
    items:  Array< {
      __typename: "WearableData",
      createdAt: string,
      dataType?: string | null,
      dataValue?: string | null,
      deviceId?: string | null,
      id: string,
      owner?: string | null,
      timestamp?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: CreateArticleInput,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateAutomatedUpdateMutationVariables = {
  condition?: ModelAutomatedUpdateConditionInput | null,
  input: CreateAutomatedUpdateInput,
};

export type CreateAutomatedUpdateMutation = {
  createAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateBasalBodyTemperatureMutationVariables = {
  condition?: ModelBasalBodyTemperatureConditionInput | null,
  input: CreateBasalBodyTemperatureInput,
};

export type CreateBasalBodyTemperatureMutation = {
  createBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateContraceptiveMethodMutationVariables = {
  condition?: ModelContraceptiveMethodConditionInput | null,
  input: CreateContraceptiveMethodInput,
};

export type CreateContraceptiveMethodMutation = {
  createContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateContraceptiveReminderMutationVariables = {
  condition?: ModelContraceptiveReminderConditionInput | null,
  input: CreateContraceptiveReminderInput,
};

export type CreateContraceptiveReminderMutation = {
  createContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateDataProtectionMutationVariables = {
  condition?: ModelDataProtectionConditionInput | null,
  input: CreateDataProtectionInput,
};

export type CreateDataProtectionMutation = {
  createDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateFAQMutationVariables = {
  condition?: ModelFAQConditionInput | null,
  input: CreateFAQInput,
};

export type CreateFAQMutation = {
  createFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type CreateFertilityWindowMutationVariables = {
  condition?: ModelFertilityWindowConditionInput | null,
  input: CreateFertilityWindowInput,
};

export type CreateFertilityWindowMutation = {
  createFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateHealthGoalMutationVariables = {
  condition?: ModelHealthGoalConditionInput | null,
  input: CreateHealthGoalInput,
};

export type CreateHealthGoalMutation = {
  createHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateMedicationLogMutationVariables = {
  condition?: ModelMedicationLogConditionInput | null,
  input: CreateMedicationLogInput,
};

export type CreateMedicationLogMutation = {
  createMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateMenstrualHealthInsightMutationVariables = {
  condition?: ModelMenstrualHealthInsightConditionInput | null,
  input: CreateMenstrualHealthInsightInput,
};

export type CreateMenstrualHealthInsightMutation = {
  createMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateOvulationCycleMutationVariables = {
  condition?: ModelOvulationCycleConditionInput | null,
  input: CreateOvulationCycleInput,
};

export type CreateOvulationCycleMutation = {
  createOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateOvulationCycleAnalysisMutationVariables = {
  condition?: ModelOvulationCycleAnalysisConditionInput | null,
  input: CreateOvulationCycleAnalysisInput,
};

export type CreateOvulationCycleAnalysisMutation = {
  createOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateOvulationPredictionMutationVariables = {
  condition?: ModelOvulationPredictionConditionInput | null,
  input: CreateOvulationPredictionInput,
};

export type CreateOvulationPredictionMutation = {
  createOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateOvulationTestMutationVariables = {
  condition?: ModelOvulationTestConditionInput | null,
  input: CreateOvulationTestInput,
};

export type CreateOvulationTestMutation = {
  createOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreatePredictiveAnalyticsMutationVariables = {
  condition?: ModelPredictiveAnalyticsConditionInput | null,
  input: CreatePredictiveAnalyticsInput,
};

export type CreatePredictiveAnalyticsMutation = {
  createPredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreatePrivacySettingMutationVariables = {
  condition?: ModelPrivacySettingConditionInput | null,
  input: CreatePrivacySettingInput,
};

export type CreatePrivacySettingMutation = {
  createPrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateProgressReportMutationVariables = {
  condition?: ModelProgressReportConditionInput | null,
  input: CreateProgressReportInput,
};

export type CreateProgressReportMutation = {
  createProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateSupportGroupMutationVariables = {
  condition?: ModelSupportGroupConditionInput | null,
  input: CreateSupportGroupInput,
};

export type CreateSupportGroupMutation = {
  createSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateSymptomLogMutationVariables = {
  condition?: ModelSymptomLogConditionInput | null,
  input: CreateSymptomLogInput,
};

export type CreateSymptomLogMutation = {
  createSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateUserForumMutationVariables = {
  condition?: ModelUserForumConditionInput | null,
  input: CreateUserForumInput,
};

export type CreateUserForumMutation = {
  createUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateWearableDataMutationVariables = {
  condition?: ModelWearableDataConditionInput | null,
  input: CreateWearableDataInput,
};

export type CreateWearableDataMutation = {
  createWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: DeleteArticleInput,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteAutomatedUpdateMutationVariables = {
  condition?: ModelAutomatedUpdateConditionInput | null,
  input: DeleteAutomatedUpdateInput,
};

export type DeleteAutomatedUpdateMutation = {
  deleteAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteBasalBodyTemperatureMutationVariables = {
  condition?: ModelBasalBodyTemperatureConditionInput | null,
  input: DeleteBasalBodyTemperatureInput,
};

export type DeleteBasalBodyTemperatureMutation = {
  deleteBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteContraceptiveMethodMutationVariables = {
  condition?: ModelContraceptiveMethodConditionInput | null,
  input: DeleteContraceptiveMethodInput,
};

export type DeleteContraceptiveMethodMutation = {
  deleteContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteContraceptiveReminderMutationVariables = {
  condition?: ModelContraceptiveReminderConditionInput | null,
  input: DeleteContraceptiveReminderInput,
};

export type DeleteContraceptiveReminderMutation = {
  deleteContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteDataProtectionMutationVariables = {
  condition?: ModelDataProtectionConditionInput | null,
  input: DeleteDataProtectionInput,
};

export type DeleteDataProtectionMutation = {
  deleteDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteFAQMutationVariables = {
  condition?: ModelFAQConditionInput | null,
  input: DeleteFAQInput,
};

export type DeleteFAQMutation = {
  deleteFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type DeleteFertilityWindowMutationVariables = {
  condition?: ModelFertilityWindowConditionInput | null,
  input: DeleteFertilityWindowInput,
};

export type DeleteFertilityWindowMutation = {
  deleteFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteHealthGoalMutationVariables = {
  condition?: ModelHealthGoalConditionInput | null,
  input: DeleteHealthGoalInput,
};

export type DeleteHealthGoalMutation = {
  deleteHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteMedicationLogMutationVariables = {
  condition?: ModelMedicationLogConditionInput | null,
  input: DeleteMedicationLogInput,
};

export type DeleteMedicationLogMutation = {
  deleteMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteMenstrualHealthInsightMutationVariables = {
  condition?: ModelMenstrualHealthInsightConditionInput | null,
  input: DeleteMenstrualHealthInsightInput,
};

export type DeleteMenstrualHealthInsightMutation = {
  deleteMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteOvulationCycleMutationVariables = {
  condition?: ModelOvulationCycleConditionInput | null,
  input: DeleteOvulationCycleInput,
};

export type DeleteOvulationCycleMutation = {
  deleteOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteOvulationCycleAnalysisMutationVariables = {
  condition?: ModelOvulationCycleAnalysisConditionInput | null,
  input: DeleteOvulationCycleAnalysisInput,
};

export type DeleteOvulationCycleAnalysisMutation = {
  deleteOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteOvulationPredictionMutationVariables = {
  condition?: ModelOvulationPredictionConditionInput | null,
  input: DeleteOvulationPredictionInput,
};

export type DeleteOvulationPredictionMutation = {
  deleteOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteOvulationTestMutationVariables = {
  condition?: ModelOvulationTestConditionInput | null,
  input: DeleteOvulationTestInput,
};

export type DeleteOvulationTestMutation = {
  deleteOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeletePredictiveAnalyticsMutationVariables = {
  condition?: ModelPredictiveAnalyticsConditionInput | null,
  input: DeletePredictiveAnalyticsInput,
};

export type DeletePredictiveAnalyticsMutation = {
  deletePredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeletePrivacySettingMutationVariables = {
  condition?: ModelPrivacySettingConditionInput | null,
  input: DeletePrivacySettingInput,
};

export type DeletePrivacySettingMutation = {
  deletePrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteProgressReportMutationVariables = {
  condition?: ModelProgressReportConditionInput | null,
  input: DeleteProgressReportInput,
};

export type DeleteProgressReportMutation = {
  deleteProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteSupportGroupMutationVariables = {
  condition?: ModelSupportGroupConditionInput | null,
  input: DeleteSupportGroupInput,
};

export type DeleteSupportGroupMutation = {
  deleteSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteSymptomLogMutationVariables = {
  condition?: ModelSymptomLogConditionInput | null,
  input: DeleteSymptomLogInput,
};

export type DeleteSymptomLogMutation = {
  deleteSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteUserForumMutationVariables = {
  condition?: ModelUserForumConditionInput | null,
  input: DeleteUserForumInput,
};

export type DeleteUserForumMutation = {
  deleteUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteWearableDataMutationVariables = {
  condition?: ModelWearableDataConditionInput | null,
  input: DeleteWearableDataInput,
};

export type DeleteWearableDataMutation = {
  deleteWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  condition?: ModelArticleConditionInput | null,
  input: UpdateArticleInput,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateAutomatedUpdateMutationVariables = {
  condition?: ModelAutomatedUpdateConditionInput | null,
  input: UpdateAutomatedUpdateInput,
};

export type UpdateAutomatedUpdateMutation = {
  updateAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateBasalBodyTemperatureMutationVariables = {
  condition?: ModelBasalBodyTemperatureConditionInput | null,
  input: UpdateBasalBodyTemperatureInput,
};

export type UpdateBasalBodyTemperatureMutation = {
  updateBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateContraceptiveMethodMutationVariables = {
  condition?: ModelContraceptiveMethodConditionInput | null,
  input: UpdateContraceptiveMethodInput,
};

export type UpdateContraceptiveMethodMutation = {
  updateContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateContraceptiveReminderMutationVariables = {
  condition?: ModelContraceptiveReminderConditionInput | null,
  input: UpdateContraceptiveReminderInput,
};

export type UpdateContraceptiveReminderMutation = {
  updateContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateDataProtectionMutationVariables = {
  condition?: ModelDataProtectionConditionInput | null,
  input: UpdateDataProtectionInput,
};

export type UpdateDataProtectionMutation = {
  updateDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateFAQMutationVariables = {
  condition?: ModelFAQConditionInput | null,
  input: UpdateFAQInput,
};

export type UpdateFAQMutation = {
  updateFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type UpdateFertilityWindowMutationVariables = {
  condition?: ModelFertilityWindowConditionInput | null,
  input: UpdateFertilityWindowInput,
};

export type UpdateFertilityWindowMutation = {
  updateFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateHealthGoalMutationVariables = {
  condition?: ModelHealthGoalConditionInput | null,
  input: UpdateHealthGoalInput,
};

export type UpdateHealthGoalMutation = {
  updateHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateMedicationLogMutationVariables = {
  condition?: ModelMedicationLogConditionInput | null,
  input: UpdateMedicationLogInput,
};

export type UpdateMedicationLogMutation = {
  updateMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateMenstrualHealthInsightMutationVariables = {
  condition?: ModelMenstrualHealthInsightConditionInput | null,
  input: UpdateMenstrualHealthInsightInput,
};

export type UpdateMenstrualHealthInsightMutation = {
  updateMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateOvulationCycleMutationVariables = {
  condition?: ModelOvulationCycleConditionInput | null,
  input: UpdateOvulationCycleInput,
};

export type UpdateOvulationCycleMutation = {
  updateOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateOvulationCycleAnalysisMutationVariables = {
  condition?: ModelOvulationCycleAnalysisConditionInput | null,
  input: UpdateOvulationCycleAnalysisInput,
};

export type UpdateOvulationCycleAnalysisMutation = {
  updateOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateOvulationPredictionMutationVariables = {
  condition?: ModelOvulationPredictionConditionInput | null,
  input: UpdateOvulationPredictionInput,
};

export type UpdateOvulationPredictionMutation = {
  updateOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateOvulationTestMutationVariables = {
  condition?: ModelOvulationTestConditionInput | null,
  input: UpdateOvulationTestInput,
};

export type UpdateOvulationTestMutation = {
  updateOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdatePredictiveAnalyticsMutationVariables = {
  condition?: ModelPredictiveAnalyticsConditionInput | null,
  input: UpdatePredictiveAnalyticsInput,
};

export type UpdatePredictiveAnalyticsMutation = {
  updatePredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdatePrivacySettingMutationVariables = {
  condition?: ModelPrivacySettingConditionInput | null,
  input: UpdatePrivacySettingInput,
};

export type UpdatePrivacySettingMutation = {
  updatePrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateProgressReportMutationVariables = {
  condition?: ModelProgressReportConditionInput | null,
  input: UpdateProgressReportInput,
};

export type UpdateProgressReportMutation = {
  updateProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateSupportGroupMutationVariables = {
  condition?: ModelSupportGroupConditionInput | null,
  input: UpdateSupportGroupInput,
};

export type UpdateSupportGroupMutation = {
  updateSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateSymptomLogMutationVariables = {
  condition?: ModelSymptomLogConditionInput | null,
  input: UpdateSymptomLogInput,
};

export type UpdateSymptomLogMutation = {
  updateSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateUserForumMutationVariables = {
  condition?: ModelUserForumConditionInput | null,
  input: UpdateUserForumInput,
};

export type UpdateUserForumMutation = {
  updateUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateWearableDataMutationVariables = {
  condition?: ModelWearableDataConditionInput | null,
  input: UpdateWearableDataInput,
};

export type UpdateWearableDataMutation = {
  updateWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  owner?: string | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateAutomatedUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionAutomatedUpdateFilterInput | null,
  owner?: string | null,
};

export type OnCreateAutomatedUpdateSubscription = {
  onCreateAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateBasalBodyTemperatureSubscriptionVariables = {
  filter?: ModelSubscriptionBasalBodyTemperatureFilterInput | null,
  owner?: string | null,
};

export type OnCreateBasalBodyTemperatureSubscription = {
  onCreateBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateContraceptiveMethodSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveMethodFilterInput | null,
  owner?: string | null,
};

export type OnCreateContraceptiveMethodSubscription = {
  onCreateContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateContraceptiveReminderSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveReminderFilterInput | null,
  owner?: string | null,
};

export type OnCreateContraceptiveReminderSubscription = {
  onCreateContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateDataProtectionSubscriptionVariables = {
  filter?: ModelSubscriptionDataProtectionFilterInput | null,
  owner?: string | null,
};

export type OnCreateDataProtectionSubscription = {
  onCreateDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null,
  owner?: string | null,
};

export type OnCreateFAQSubscription = {
  onCreateFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnCreateFertilityWindowSubscriptionVariables = {
  filter?: ModelSubscriptionFertilityWindowFilterInput | null,
  owner?: string | null,
};

export type OnCreateFertilityWindowSubscription = {
  onCreateFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateHealthGoalSubscriptionVariables = {
  filter?: ModelSubscriptionHealthGoalFilterInput | null,
  owner?: string | null,
};

export type OnCreateHealthGoalSubscription = {
  onCreateHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateMedicationLogSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateMedicationLogSubscription = {
  onCreateMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateMenstrualHealthInsightSubscriptionVariables = {
  filter?: ModelSubscriptionMenstrualHealthInsightFilterInput | null,
  owner?: string | null,
};

export type OnCreateMenstrualHealthInsightSubscription = {
  onCreateMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateOvulationCycleSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleFilterInput | null,
  owner?: string | null,
};

export type OnCreateOvulationCycleSubscription = {
  onCreateOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateOvulationCycleAnalysisSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleAnalysisFilterInput | null,
  owner?: string | null,
};

export type OnCreateOvulationCycleAnalysisSubscription = {
  onCreateOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateOvulationPredictionSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationPredictionFilterInput | null,
  owner?: string | null,
};

export type OnCreateOvulationPredictionSubscription = {
  onCreateOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateOvulationTestSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationTestFilterInput | null,
  owner?: string | null,
};

export type OnCreateOvulationTestSubscription = {
  onCreateOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreatePredictiveAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionPredictiveAnalyticsFilterInput | null,
  owner?: string | null,
};

export type OnCreatePredictiveAnalyticsSubscription = {
  onCreatePredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreatePrivacySettingSubscriptionVariables = {
  filter?: ModelSubscriptionPrivacySettingFilterInput | null,
  owner?: string | null,
};

export type OnCreatePrivacySettingSubscription = {
  onCreatePrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
  owner?: string | null,
};

export type OnCreateProgressReportSubscription = {
  onCreateProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateSupportGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSupportGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateSupportGroupSubscription = {
  onCreateSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateSymptomLogSubscriptionVariables = {
  filter?: ModelSubscriptionSymptomLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateSymptomLogSubscription = {
  onCreateSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateUserForumSubscriptionVariables = {
  filter?: ModelSubscriptionUserForumFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserForumSubscription = {
  onCreateUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateWearableDataSubscriptionVariables = {
  filter?: ModelSubscriptionWearableDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateWearableDataSubscription = {
  onCreateWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteAutomatedUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionAutomatedUpdateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAutomatedUpdateSubscription = {
  onDeleteAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteBasalBodyTemperatureSubscriptionVariables = {
  filter?: ModelSubscriptionBasalBodyTemperatureFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBasalBodyTemperatureSubscription = {
  onDeleteBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteContraceptiveMethodSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveMethodFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContraceptiveMethodSubscription = {
  onDeleteContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteContraceptiveReminderSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveReminderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContraceptiveReminderSubscription = {
  onDeleteContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteDataProtectionSubscriptionVariables = {
  filter?: ModelSubscriptionDataProtectionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDataProtectionSubscription = {
  onDeleteDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFAQSubscription = {
  onDeleteFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnDeleteFertilityWindowSubscriptionVariables = {
  filter?: ModelSubscriptionFertilityWindowFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFertilityWindowSubscription = {
  onDeleteFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteHealthGoalSubscriptionVariables = {
  filter?: ModelSubscriptionHealthGoalFilterInput | null,
  owner?: string | null,
};

export type OnDeleteHealthGoalSubscription = {
  onDeleteHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteMedicationLogSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMedicationLogSubscription = {
  onDeleteMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteMenstrualHealthInsightSubscriptionVariables = {
  filter?: ModelSubscriptionMenstrualHealthInsightFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMenstrualHealthInsightSubscription = {
  onDeleteMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteOvulationCycleSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOvulationCycleSubscription = {
  onDeleteOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteOvulationCycleAnalysisSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleAnalysisFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOvulationCycleAnalysisSubscription = {
  onDeleteOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteOvulationPredictionSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationPredictionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOvulationPredictionSubscription = {
  onDeleteOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteOvulationTestSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationTestFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOvulationTestSubscription = {
  onDeleteOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeletePredictiveAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionPredictiveAnalyticsFilterInput | null,
  owner?: string | null,
};

export type OnDeletePredictiveAnalyticsSubscription = {
  onDeletePredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeletePrivacySettingSubscriptionVariables = {
  filter?: ModelSubscriptionPrivacySettingFilterInput | null,
  owner?: string | null,
};

export type OnDeletePrivacySettingSubscription = {
  onDeletePrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProgressReportSubscription = {
  onDeleteProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteSupportGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSupportGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSupportGroupSubscription = {
  onDeleteSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteSymptomLogSubscriptionVariables = {
  filter?: ModelSubscriptionSymptomLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSymptomLogSubscription = {
  onDeleteSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteUserForumSubscriptionVariables = {
  filter?: ModelSubscriptionUserForumFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserForumSubscription = {
  onDeleteUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteWearableDataSubscriptionVariables = {
  filter?: ModelSubscriptionWearableDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWearableDataSubscription = {
  onDeleteWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    category?: string | null,
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    publishedDate?: string | null,
    title?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateAutomatedUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionAutomatedUpdateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAutomatedUpdateSubscription = {
  onUpdateAutomatedUpdate?:  {
    __typename: "AutomatedUpdate",
    createdAt: string,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updateData?: string | null,
    updateType?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateBasalBodyTemperatureSubscriptionVariables = {
  filter?: ModelSubscriptionBasalBodyTemperatureFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBasalBodyTemperatureSubscription = {
  onUpdateBasalBodyTemperature?:  {
    __typename: "BasalBodyTemperature",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    temperature?: number | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateContraceptiveMethodSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveMethodFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContraceptiveMethodSubscription = {
  onUpdateContraceptiveMethod?:  {
    __typename: "ContraceptiveMethod",
    createdAt: string,
    description?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    sideEffects?: Array< string | null > | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateContraceptiveReminderSubscriptionVariables = {
  filter?: ModelSubscriptionContraceptiveReminderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContraceptiveReminderSubscription = {
  onUpdateContraceptiveReminder?:  {
    __typename: "ContraceptiveReminder",
    contraceptiveMethod?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    reminderTime?: string | null,
    status?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateDataProtectionSubscriptionVariables = {
  filter?: ModelSubscriptionDataProtectionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDataProtectionSubscription = {
  onUpdateDataProtection?:  {
    __typename: "DataProtection",
    createdAt: string,
    dataType?: string | null,
    id: string,
    owner?: string | null,
    protectionStatus?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFAQSubscription = {
  onUpdateFAQ?:  {
    __typename: "FAQ",
    answer?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    question?: string | null,
    updatedAt: string,
    uuid: string,
  } | null,
};

export type OnUpdateFertilityWindowSubscriptionVariables = {
  filter?: ModelSubscriptionFertilityWindowFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFertilityWindowSubscription = {
  onUpdateFertilityWindow?:  {
    __typename: "FertilityWindow",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    endDate?: string | null,
    id: string,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateHealthGoalSubscriptionVariables = {
  filter?: ModelSubscriptionHealthGoalFilterInput | null,
  owner?: string | null,
};

export type OnUpdateHealthGoalSubscription = {
  onUpdateHealthGoal?:  {
    __typename: "HealthGoal",
    createdAt: string,
    goalDescription?: string | null,
    goalName?: string | null,
    id: string,
    owner?: string | null,
    progress?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    targetDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateMedicationLogSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMedicationLogSubscription = {
  onUpdateMedicationLog?:  {
    __typename: "MedicationLog",
    createdAt: string,
    dose?: string | null,
    endDate?: string | null,
    id: string,
    medicationName?: string | null,
    notes?: string | null,
    owner?: string | null,
    startDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateMenstrualHealthInsightSubscriptionVariables = {
  filter?: ModelSubscriptionMenstrualHealthInsightFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMenstrualHealthInsightSubscription = {
  onUpdateMenstrualHealthInsight?:  {
    __typename: "MenstrualHealthInsight",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    insight?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateOvulationCycleSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOvulationCycleSubscription = {
  onUpdateOvulationCycle?:  {
    __typename: "OvulationCycle",
    analyses?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    cycleLength?: number | null,
    endDate?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    flowIntensity?: string | null,
    id: string,
    menstrualHealthInsight?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    predictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    symptoms?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateOvulationCycleAnalysisSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationCycleAnalysisFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOvulationCycleAnalysisSubscription = {
  onUpdateOvulationCycleAnalysis?:  {
    __typename: "OvulationCycleAnalysis",
    analysis?: string | null,
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    date?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateOvulationPredictionSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationPredictionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOvulationPredictionSubscription = {
  onUpdateOvulationPrediction?:  {
    __typename: "OvulationPrediction",
    createdAt: string,
    cycle?:  {
      __typename: "OvulationCycle",
      createdAt: string,
      cycleLength?: number | null,
      endDate?: string | null,
      flowIntensity?: string | null,
      id: string,
      owner?: string | null,
      startDate?: string | null,
      symptoms?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    cycleId?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    predictedOvulationDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateOvulationTestSubscriptionVariables = {
  filter?: ModelSubscriptionOvulationTestFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOvulationTestSubscription = {
  onUpdateOvulationTest?:  {
    __typename: "OvulationTest",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    result?: OvulationTestResult | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdatePredictiveAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionPredictiveAnalyticsFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePredictiveAnalyticsSubscription = {
  onUpdatePredictiveAnalytics?:  {
    __typename: "PredictiveAnalytics",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    prediction?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdatePrivacySettingSubscriptionVariables = {
  filter?: ModelSubscriptionPrivacySettingFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePrivacySettingSubscription = {
  onUpdatePrivacySetting?:  {
    __typename: "PrivacySetting",
    createdAt: string,
    id: string,
    owner?: string | null,
    settingName?: string | null,
    settingValue?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateProgressReportSubscriptionVariables = {
  filter?: ModelSubscriptionProgressReportFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProgressReportSubscription = {
  onUpdateProgressReport?:  {
    __typename: "ProgressReport",
    createdAt: string,
    goal?:  {
      __typename: "HealthGoal",
      createdAt: string,
      goalDescription?: string | null,
      goalName?: string | null,
      id: string,
      owner?: string | null,
      progress?: string | null,
      targetDate?: string | null,
      updatedAt: string,
      userProfileId?: string | null,
      uuid: string,
    } | null,
    goalId?: string | null,
    id: string,
    owner?: string | null,
    reportDate?: string | null,
    reportDetails?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateSupportGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSupportGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSupportGroupSubscription = {
  onUpdateSupportGroup?:  {
    __typename: "SupportGroup",
    createdAt: string,
    groupDescription?: string | null,
    groupName?: string | null,
    id: string,
    membershipDate?: string | null,
    owner?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateSymptomLogSubscriptionVariables = {
  filter?: ModelSubscriptionSymptomLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSymptomLogSubscription = {
  onUpdateSymptomLog?:  {
    __typename: "SymptomLog",
    createdAt: string,
    date?: string | null,
    id: string,
    owner?: string | null,
    severity?: string | null,
    symptom?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateUserForumSubscriptionVariables = {
  filter?: ModelSubscriptionUserForumFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserForumSubscription = {
  onUpdateUserForum?:  {
    __typename: "UserForum",
    createdAt: string,
    forumTopic?: string | null,
    id: string,
    owner?: string | null,
    postContent?: string | null,
    postDate?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    OvulationCycleAnalysis?:  {
      __typename: "ModelOvulationCycleAnalysisConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    automatedUpdates?:  {
      __typename: "ModelAutomatedUpdateConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    basalBodyTemperatures?:  {
      __typename: "ModelBasalBodyTemperatureConnection",
      nextToken?: string | null,
    } | null,
    birthday?: string | null,
    contraceptiveMethods?:  {
      __typename: "ModelContraceptiveMethodConnection",
      nextToken?: string | null,
    } | null,
    contraceptiveReminders?:  {
      __typename: "ModelContraceptiveReminderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    dataProtections?:  {
      __typename: "ModelDataProtectionConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    fertilityWindows?:  {
      __typename: "ModelFertilityWindowConnection",
      nextToken?: string | null,
    } | null,
    healthGoals?:  {
      __typename: "ModelHealthGoalConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    medicationLogs?:  {
      __typename: "ModelMedicationLogConnection",
      nextToken?: string | null,
    } | null,
    menstrualHealthInsights?:  {
      __typename: "ModelMenstrualHealthInsightConnection",
      nextToken?: string | null,
    } | null,
    ovulationCycles?:  {
      __typename: "ModelOvulationCycleConnection",
      nextToken?: string | null,
    } | null,
    ovulationPredictions?:  {
      __typename: "ModelOvulationPredictionConnection",
      nextToken?: string | null,
    } | null,
    ovulationTests?:  {
      __typename: "ModelOvulationTestConnection",
      nextToken?: string | null,
    } | null,
    predictiveAnalytics?:  {
      __typename: "ModelPredictiveAnalyticsConnection",
      nextToken?: string | null,
    } | null,
    privacySettings?:  {
      __typename: "ModelPrivacySettingConnection",
      nextToken?: string | null,
    } | null,
    profileOwner?: string | null,
    progressReports?:  {
      __typename: "ModelProgressReportConnection",
      nextToken?: string | null,
    } | null,
    supportGroups?:  {
      __typename: "ModelSupportGroupConnection",
      nextToken?: string | null,
    } | null,
    symptomLogs?:  {
      __typename: "ModelSymptomLogConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userForums?:  {
      __typename: "ModelUserForumConnection",
      nextToken?: string | null,
    } | null,
    uuid: string,
    wearableData?:  {
      __typename: "ModelWearableDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateWearableDataSubscriptionVariables = {
  filter?: ModelSubscriptionWearableDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWearableDataSubscription = {
  onUpdateWearableData?:  {
    __typename: "WearableData",
    createdAt: string,
    dataType?: string | null,
    dataValue?: string | null,
    deviceId?: string | null,
    id: string,
    owner?: string | null,
    timestamp?: string | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      birthday?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
      uuid: string,
    } | null,
    userProfileId?: string | null,
    uuid: string,
  } | null,
};
