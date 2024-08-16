/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $condition: ModelArticleConditionInput
    $input: CreateArticleInput!
  ) {
    createArticle(condition: $condition, input: $input) {
      category
      content
      createdAt
      id
      owner
      publishedDate
      title
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createAutomatedUpdate = /* GraphQL */ `
  mutation CreateAutomatedUpdate(
    $condition: ModelAutomatedUpdateConditionInput
    $input: CreateAutomatedUpdateInput!
  ) {
    createAutomatedUpdate(condition: $condition, input: $input) {
      createdAt
      id
      owner
      timestamp
      updateData
      updateType
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createBasalBodyTemperature = /* GraphQL */ `
  mutation CreateBasalBodyTemperature(
    $condition: ModelBasalBodyTemperatureConditionInput
    $input: CreateBasalBodyTemperatureInput!
  ) {
    createBasalBodyTemperature(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      temperature
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createContraceptiveMethod = /* GraphQL */ `
  mutation CreateContraceptiveMethod(
    $condition: ModelContraceptiveMethodConditionInput
    $input: CreateContraceptiveMethodInput!
  ) {
    createContraceptiveMethod(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      owner
      sideEffects
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createContraceptiveReminder = /* GraphQL */ `
  mutation CreateContraceptiveReminder(
    $condition: ModelContraceptiveReminderConditionInput
    $input: CreateContraceptiveReminderInput!
  ) {
    createContraceptiveReminder(condition: $condition, input: $input) {
      contraceptiveMethod
      createdAt
      id
      owner
      reminderTime
      status
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createDataProtection = /* GraphQL */ `
  mutation CreateDataProtection(
    $condition: ModelDataProtectionConditionInput
    $input: CreateDataProtectionInput!
  ) {
    createDataProtection(condition: $condition, input: $input) {
      createdAt
      dataType
      id
      owner
      protectionStatus
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $condition: ModelFAQConditionInput
    $input: CreateFAQInput!
  ) {
    createFAQ(condition: $condition, input: $input) {
      answer
      createdAt
      id
      owner
      question
      updatedAt
      uuid
      __typename
    }
  }
`;
export const createFertilityWindow = /* GraphQL */ `
  mutation CreateFertilityWindow(
    $condition: ModelFertilityWindowConditionInput
    $input: CreateFertilityWindowInput!
  ) {
    createFertilityWindow(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      endDate
      id
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createHealthGoal = /* GraphQL */ `
  mutation CreateHealthGoal(
    $condition: ModelHealthGoalConditionInput
    $input: CreateHealthGoalInput!
  ) {
    createHealthGoal(condition: $condition, input: $input) {
      createdAt
      goalDescription
      goalName
      id
      owner
      progress
      progressReports {
        nextToken
        __typename
      }
      targetDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createMedicationLog = /* GraphQL */ `
  mutation CreateMedicationLog(
    $condition: ModelMedicationLogConditionInput
    $input: CreateMedicationLogInput!
  ) {
    createMedicationLog(condition: $condition, input: $input) {
      createdAt
      dose
      endDate
      id
      medicationName
      notes
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createMenstrualHealthInsight = /* GraphQL */ `
  mutation CreateMenstrualHealthInsight(
    $condition: ModelMenstrualHealthInsightConditionInput
    $input: CreateMenstrualHealthInsightInput!
  ) {
    createMenstrualHealthInsight(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      insight
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createOvulationCycle = /* GraphQL */ `
  mutation CreateOvulationCycle(
    $condition: ModelOvulationCycleConditionInput
    $input: CreateOvulationCycleInput!
  ) {
    createOvulationCycle(condition: $condition, input: $input) {
      analyses {
        nextToken
        __typename
      }
      createdAt
      cycleLength
      endDate
      fertilityWindows {
        nextToken
        __typename
      }
      flowIntensity
      id
      menstrualHealthInsight {
        nextToken
        __typename
      }
      owner
      predictions {
        nextToken
        __typename
      }
      startDate
      symptoms
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createOvulationCycleAnalysis = /* GraphQL */ `
  mutation CreateOvulationCycleAnalysis(
    $condition: ModelOvulationCycleAnalysisConditionInput
    $input: CreateOvulationCycleAnalysisInput!
  ) {
    createOvulationCycleAnalysis(condition: $condition, input: $input) {
      analysis
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createOvulationPrediction = /* GraphQL */ `
  mutation CreateOvulationPrediction(
    $condition: ModelOvulationPredictionConditionInput
    $input: CreateOvulationPredictionInput!
  ) {
    createOvulationPrediction(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      id
      notes
      owner
      predictedOvulationDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createOvulationTest = /* GraphQL */ `
  mutation CreateOvulationTest(
    $condition: ModelOvulationTestConditionInput
    $input: CreateOvulationTestInput!
  ) {
    createOvulationTest(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      result
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createPredictiveAnalytics = /* GraphQL */ `
  mutation CreatePredictiveAnalytics(
    $condition: ModelPredictiveAnalyticsConditionInput
    $input: CreatePredictiveAnalyticsInput!
  ) {
    createPredictiveAnalytics(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      prediction
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createPrivacySetting = /* GraphQL */ `
  mutation CreatePrivacySetting(
    $condition: ModelPrivacySettingConditionInput
    $input: CreatePrivacySettingInput!
  ) {
    createPrivacySetting(condition: $condition, input: $input) {
      createdAt
      id
      owner
      settingName
      settingValue
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createProgressReport = /* GraphQL */ `
  mutation CreateProgressReport(
    $condition: ModelProgressReportConditionInput
    $input: CreateProgressReportInput!
  ) {
    createProgressReport(condition: $condition, input: $input) {
      createdAt
      goal {
        createdAt
        goalDescription
        goalName
        id
        owner
        progress
        targetDate
        updatedAt
        userProfileId
        uuid
        __typename
      }
      goalId
      id
      owner
      reportDate
      reportDetails
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createSupportGroup = /* GraphQL */ `
  mutation CreateSupportGroup(
    $condition: ModelSupportGroupConditionInput
    $input: CreateSupportGroupInput!
  ) {
    createSupportGroup(condition: $condition, input: $input) {
      createdAt
      groupDescription
      groupName
      id
      membershipDate
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createSymptomLog = /* GraphQL */ `
  mutation CreateSymptomLog(
    $condition: ModelSymptomLogConditionInput
    $input: CreateSymptomLogInput!
  ) {
    createSymptomLog(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      severity
      symptom
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createUserForum = /* GraphQL */ `
  mutation CreateUserForum(
    $condition: ModelUserForumConditionInput
    $input: CreateUserForumInput!
  ) {
    createUserForum(condition: $condition, input: $input) {
      createdAt
      forumTopic
      id
      owner
      postContent
      postDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: CreateUserProfileInput!
  ) {
    createUserProfile(condition: $condition, input: $input) {
      OvulationCycleAnalysis {
        nextToken
        __typename
      }
      articles {
        nextToken
        __typename
      }
      automatedUpdates {
        nextToken
        __typename
      }
      avatar
      basalBodyTemperatures {
        nextToken
        __typename
      }
      birthday
      contraceptiveMethods {
        nextToken
        __typename
      }
      contraceptiveReminders {
        nextToken
        __typename
      }
      createdAt
      dataProtections {
        nextToken
        __typename
      }
      email
      fertilityWindows {
        nextToken
        __typename
      }
      healthGoals {
        nextToken
        __typename
      }
      id
      medicationLogs {
        nextToken
        __typename
      }
      menstrualHealthInsights {
        nextToken
        __typename
      }
      ovulationCycles {
        nextToken
        __typename
      }
      ovulationPredictions {
        nextToken
        __typename
      }
      ovulationTests {
        nextToken
        __typename
      }
      predictiveAnalytics {
        nextToken
        __typename
      }
      privacySettings {
        nextToken
        __typename
      }
      profileOwner
      progressReports {
        nextToken
        __typename
      }
      supportGroups {
        nextToken
        __typename
      }
      symptomLogs {
        nextToken
        __typename
      }
      updatedAt
      userForums {
        nextToken
        __typename
      }
      uuid
      wearableData {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createWearableData = /* GraphQL */ `
  mutation CreateWearableData(
    $condition: ModelWearableDataConditionInput
    $input: CreateWearableDataInput!
  ) {
    createWearableData(condition: $condition, input: $input) {
      createdAt
      dataType
      dataValue
      deviceId
      id
      owner
      timestamp
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $condition: ModelArticleConditionInput
    $input: DeleteArticleInput!
  ) {
    deleteArticle(condition: $condition, input: $input) {
      category
      content
      createdAt
      id
      owner
      publishedDate
      title
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteAutomatedUpdate = /* GraphQL */ `
  mutation DeleteAutomatedUpdate(
    $condition: ModelAutomatedUpdateConditionInput
    $input: DeleteAutomatedUpdateInput!
  ) {
    deleteAutomatedUpdate(condition: $condition, input: $input) {
      createdAt
      id
      owner
      timestamp
      updateData
      updateType
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteBasalBodyTemperature = /* GraphQL */ `
  mutation DeleteBasalBodyTemperature(
    $condition: ModelBasalBodyTemperatureConditionInput
    $input: DeleteBasalBodyTemperatureInput!
  ) {
    deleteBasalBodyTemperature(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      temperature
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteContraceptiveMethod = /* GraphQL */ `
  mutation DeleteContraceptiveMethod(
    $condition: ModelContraceptiveMethodConditionInput
    $input: DeleteContraceptiveMethodInput!
  ) {
    deleteContraceptiveMethod(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      owner
      sideEffects
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteContraceptiveReminder = /* GraphQL */ `
  mutation DeleteContraceptiveReminder(
    $condition: ModelContraceptiveReminderConditionInput
    $input: DeleteContraceptiveReminderInput!
  ) {
    deleteContraceptiveReminder(condition: $condition, input: $input) {
      contraceptiveMethod
      createdAt
      id
      owner
      reminderTime
      status
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteDataProtection = /* GraphQL */ `
  mutation DeleteDataProtection(
    $condition: ModelDataProtectionConditionInput
    $input: DeleteDataProtectionInput!
  ) {
    deleteDataProtection(condition: $condition, input: $input) {
      createdAt
      dataType
      id
      owner
      protectionStatus
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $condition: ModelFAQConditionInput
    $input: DeleteFAQInput!
  ) {
    deleteFAQ(condition: $condition, input: $input) {
      answer
      createdAt
      id
      owner
      question
      updatedAt
      uuid
      __typename
    }
  }
`;
export const deleteFertilityWindow = /* GraphQL */ `
  mutation DeleteFertilityWindow(
    $condition: ModelFertilityWindowConditionInput
    $input: DeleteFertilityWindowInput!
  ) {
    deleteFertilityWindow(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      endDate
      id
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteHealthGoal = /* GraphQL */ `
  mutation DeleteHealthGoal(
    $condition: ModelHealthGoalConditionInput
    $input: DeleteHealthGoalInput!
  ) {
    deleteHealthGoal(condition: $condition, input: $input) {
      createdAt
      goalDescription
      goalName
      id
      owner
      progress
      progressReports {
        nextToken
        __typename
      }
      targetDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteMedicationLog = /* GraphQL */ `
  mutation DeleteMedicationLog(
    $condition: ModelMedicationLogConditionInput
    $input: DeleteMedicationLogInput!
  ) {
    deleteMedicationLog(condition: $condition, input: $input) {
      createdAt
      dose
      endDate
      id
      medicationName
      notes
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteMenstrualHealthInsight = /* GraphQL */ `
  mutation DeleteMenstrualHealthInsight(
    $condition: ModelMenstrualHealthInsightConditionInput
    $input: DeleteMenstrualHealthInsightInput!
  ) {
    deleteMenstrualHealthInsight(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      insight
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteOvulationCycle = /* GraphQL */ `
  mutation DeleteOvulationCycle(
    $condition: ModelOvulationCycleConditionInput
    $input: DeleteOvulationCycleInput!
  ) {
    deleteOvulationCycle(condition: $condition, input: $input) {
      analyses {
        nextToken
        __typename
      }
      createdAt
      cycleLength
      endDate
      fertilityWindows {
        nextToken
        __typename
      }
      flowIntensity
      id
      menstrualHealthInsight {
        nextToken
        __typename
      }
      owner
      predictions {
        nextToken
        __typename
      }
      startDate
      symptoms
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteOvulationCycleAnalysis = /* GraphQL */ `
  mutation DeleteOvulationCycleAnalysis(
    $condition: ModelOvulationCycleAnalysisConditionInput
    $input: DeleteOvulationCycleAnalysisInput!
  ) {
    deleteOvulationCycleAnalysis(condition: $condition, input: $input) {
      analysis
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteOvulationPrediction = /* GraphQL */ `
  mutation DeleteOvulationPrediction(
    $condition: ModelOvulationPredictionConditionInput
    $input: DeleteOvulationPredictionInput!
  ) {
    deleteOvulationPrediction(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      id
      notes
      owner
      predictedOvulationDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteOvulationTest = /* GraphQL */ `
  mutation DeleteOvulationTest(
    $condition: ModelOvulationTestConditionInput
    $input: DeleteOvulationTestInput!
  ) {
    deleteOvulationTest(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      result
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deletePredictiveAnalytics = /* GraphQL */ `
  mutation DeletePredictiveAnalytics(
    $condition: ModelPredictiveAnalyticsConditionInput
    $input: DeletePredictiveAnalyticsInput!
  ) {
    deletePredictiveAnalytics(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      prediction
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deletePrivacySetting = /* GraphQL */ `
  mutation DeletePrivacySetting(
    $condition: ModelPrivacySettingConditionInput
    $input: DeletePrivacySettingInput!
  ) {
    deletePrivacySetting(condition: $condition, input: $input) {
      createdAt
      id
      owner
      settingName
      settingValue
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteProgressReport = /* GraphQL */ `
  mutation DeleteProgressReport(
    $condition: ModelProgressReportConditionInput
    $input: DeleteProgressReportInput!
  ) {
    deleteProgressReport(condition: $condition, input: $input) {
      createdAt
      goal {
        createdAt
        goalDescription
        goalName
        id
        owner
        progress
        targetDate
        updatedAt
        userProfileId
        uuid
        __typename
      }
      goalId
      id
      owner
      reportDate
      reportDetails
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteSupportGroup = /* GraphQL */ `
  mutation DeleteSupportGroup(
    $condition: ModelSupportGroupConditionInput
    $input: DeleteSupportGroupInput!
  ) {
    deleteSupportGroup(condition: $condition, input: $input) {
      createdAt
      groupDescription
      groupName
      id
      membershipDate
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteSymptomLog = /* GraphQL */ `
  mutation DeleteSymptomLog(
    $condition: ModelSymptomLogConditionInput
    $input: DeleteSymptomLogInput!
  ) {
    deleteSymptomLog(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      severity
      symptom
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteUserForum = /* GraphQL */ `
  mutation DeleteUserForum(
    $condition: ModelUserForumConditionInput
    $input: DeleteUserForumInput!
  ) {
    deleteUserForum(condition: $condition, input: $input) {
      createdAt
      forumTopic
      id
      owner
      postContent
      postDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: DeleteUserProfileInput!
  ) {
    deleteUserProfile(condition: $condition, input: $input) {
      OvulationCycleAnalysis {
        nextToken
        __typename
      }
      articles {
        nextToken
        __typename
      }
      automatedUpdates {
        nextToken
        __typename
      }
      avatar
      basalBodyTemperatures {
        nextToken
        __typename
      }
      birthday
      contraceptiveMethods {
        nextToken
        __typename
      }
      contraceptiveReminders {
        nextToken
        __typename
      }
      createdAt
      dataProtections {
        nextToken
        __typename
      }
      email
      fertilityWindows {
        nextToken
        __typename
      }
      healthGoals {
        nextToken
        __typename
      }
      id
      medicationLogs {
        nextToken
        __typename
      }
      menstrualHealthInsights {
        nextToken
        __typename
      }
      ovulationCycles {
        nextToken
        __typename
      }
      ovulationPredictions {
        nextToken
        __typename
      }
      ovulationTests {
        nextToken
        __typename
      }
      predictiveAnalytics {
        nextToken
        __typename
      }
      privacySettings {
        nextToken
        __typename
      }
      profileOwner
      progressReports {
        nextToken
        __typename
      }
      supportGroups {
        nextToken
        __typename
      }
      symptomLogs {
        nextToken
        __typename
      }
      updatedAt
      userForums {
        nextToken
        __typename
      }
      uuid
      wearableData {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteWearableData = /* GraphQL */ `
  mutation DeleteWearableData(
    $condition: ModelWearableDataConditionInput
    $input: DeleteWearableDataInput!
  ) {
    deleteWearableData(condition: $condition, input: $input) {
      createdAt
      dataType
      dataValue
      deviceId
      id
      owner
      timestamp
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $condition: ModelArticleConditionInput
    $input: UpdateArticleInput!
  ) {
    updateArticle(condition: $condition, input: $input) {
      category
      content
      createdAt
      id
      owner
      publishedDate
      title
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateAutomatedUpdate = /* GraphQL */ `
  mutation UpdateAutomatedUpdate(
    $condition: ModelAutomatedUpdateConditionInput
    $input: UpdateAutomatedUpdateInput!
  ) {
    updateAutomatedUpdate(condition: $condition, input: $input) {
      createdAt
      id
      owner
      timestamp
      updateData
      updateType
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateBasalBodyTemperature = /* GraphQL */ `
  mutation UpdateBasalBodyTemperature(
    $condition: ModelBasalBodyTemperatureConditionInput
    $input: UpdateBasalBodyTemperatureInput!
  ) {
    updateBasalBodyTemperature(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      temperature
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateContraceptiveMethod = /* GraphQL */ `
  mutation UpdateContraceptiveMethod(
    $condition: ModelContraceptiveMethodConditionInput
    $input: UpdateContraceptiveMethodInput!
  ) {
    updateContraceptiveMethod(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      owner
      sideEffects
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateContraceptiveReminder = /* GraphQL */ `
  mutation UpdateContraceptiveReminder(
    $condition: ModelContraceptiveReminderConditionInput
    $input: UpdateContraceptiveReminderInput!
  ) {
    updateContraceptiveReminder(condition: $condition, input: $input) {
      contraceptiveMethod
      createdAt
      id
      owner
      reminderTime
      status
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateDataProtection = /* GraphQL */ `
  mutation UpdateDataProtection(
    $condition: ModelDataProtectionConditionInput
    $input: UpdateDataProtectionInput!
  ) {
    updateDataProtection(condition: $condition, input: $input) {
      createdAt
      dataType
      id
      owner
      protectionStatus
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $condition: ModelFAQConditionInput
    $input: UpdateFAQInput!
  ) {
    updateFAQ(condition: $condition, input: $input) {
      answer
      createdAt
      id
      owner
      question
      updatedAt
      uuid
      __typename
    }
  }
`;
export const updateFertilityWindow = /* GraphQL */ `
  mutation UpdateFertilityWindow(
    $condition: ModelFertilityWindowConditionInput
    $input: UpdateFertilityWindowInput!
  ) {
    updateFertilityWindow(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      endDate
      id
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateHealthGoal = /* GraphQL */ `
  mutation UpdateHealthGoal(
    $condition: ModelHealthGoalConditionInput
    $input: UpdateHealthGoalInput!
  ) {
    updateHealthGoal(condition: $condition, input: $input) {
      createdAt
      goalDescription
      goalName
      id
      owner
      progress
      progressReports {
        nextToken
        __typename
      }
      targetDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateMedicationLog = /* GraphQL */ `
  mutation UpdateMedicationLog(
    $condition: ModelMedicationLogConditionInput
    $input: UpdateMedicationLogInput!
  ) {
    updateMedicationLog(condition: $condition, input: $input) {
      createdAt
      dose
      endDate
      id
      medicationName
      notes
      owner
      startDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateMenstrualHealthInsight = /* GraphQL */ `
  mutation UpdateMenstrualHealthInsight(
    $condition: ModelMenstrualHealthInsightConditionInput
    $input: UpdateMenstrualHealthInsightInput!
  ) {
    updateMenstrualHealthInsight(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      insight
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateOvulationCycle = /* GraphQL */ `
  mutation UpdateOvulationCycle(
    $condition: ModelOvulationCycleConditionInput
    $input: UpdateOvulationCycleInput!
  ) {
    updateOvulationCycle(condition: $condition, input: $input) {
      analyses {
        nextToken
        __typename
      }
      createdAt
      cycleLength
      endDate
      fertilityWindows {
        nextToken
        __typename
      }
      flowIntensity
      id
      menstrualHealthInsight {
        nextToken
        __typename
      }
      owner
      predictions {
        nextToken
        __typename
      }
      startDate
      symptoms
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateOvulationCycleAnalysis = /* GraphQL */ `
  mutation UpdateOvulationCycleAnalysis(
    $condition: ModelOvulationCycleAnalysisConditionInput
    $input: UpdateOvulationCycleAnalysisInput!
  ) {
    updateOvulationCycleAnalysis(condition: $condition, input: $input) {
      analysis
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      date
      id
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateOvulationPrediction = /* GraphQL */ `
  mutation UpdateOvulationPrediction(
    $condition: ModelOvulationPredictionConditionInput
    $input: UpdateOvulationPredictionInput!
  ) {
    updateOvulationPrediction(condition: $condition, input: $input) {
      createdAt
      cycle {
        createdAt
        cycleLength
        endDate
        flowIntensity
        id
        owner
        startDate
        symptoms
        updatedAt
        userProfileId
        uuid
        __typename
      }
      cycleId
      id
      notes
      owner
      predictedOvulationDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateOvulationTest = /* GraphQL */ `
  mutation UpdateOvulationTest(
    $condition: ModelOvulationTestConditionInput
    $input: UpdateOvulationTestInput!
  ) {
    updateOvulationTest(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      result
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updatePredictiveAnalytics = /* GraphQL */ `
  mutation UpdatePredictiveAnalytics(
    $condition: ModelPredictiveAnalyticsConditionInput
    $input: UpdatePredictiveAnalyticsInput!
  ) {
    updatePredictiveAnalytics(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      prediction
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updatePrivacySetting = /* GraphQL */ `
  mutation UpdatePrivacySetting(
    $condition: ModelPrivacySettingConditionInput
    $input: UpdatePrivacySettingInput!
  ) {
    updatePrivacySetting(condition: $condition, input: $input) {
      createdAt
      id
      owner
      settingName
      settingValue
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateProgressReport = /* GraphQL */ `
  mutation UpdateProgressReport(
    $condition: ModelProgressReportConditionInput
    $input: UpdateProgressReportInput!
  ) {
    updateProgressReport(condition: $condition, input: $input) {
      createdAt
      goal {
        createdAt
        goalDescription
        goalName
        id
        owner
        progress
        targetDate
        updatedAt
        userProfileId
        uuid
        __typename
      }
      goalId
      id
      owner
      reportDate
      reportDetails
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateSupportGroup = /* GraphQL */ `
  mutation UpdateSupportGroup(
    $condition: ModelSupportGroupConditionInput
    $input: UpdateSupportGroupInput!
  ) {
    updateSupportGroup(condition: $condition, input: $input) {
      createdAt
      groupDescription
      groupName
      id
      membershipDate
      owner
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateSymptomLog = /* GraphQL */ `
  mutation UpdateSymptomLog(
    $condition: ModelSymptomLogConditionInput
    $input: UpdateSymptomLogInput!
  ) {
    updateSymptomLog(condition: $condition, input: $input) {
      createdAt
      date
      id
      owner
      severity
      symptom
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateUserForum = /* GraphQL */ `
  mutation UpdateUserForum(
    $condition: ModelUserForumConditionInput
    $input: UpdateUserForumInput!
  ) {
    updateUserForum(condition: $condition, input: $input) {
      createdAt
      forumTopic
      id
      owner
      postContent
      postDate
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(condition: $condition, input: $input) {
      OvulationCycleAnalysis {
        nextToken
        __typename
      }
      articles {
        nextToken
        __typename
      }
      automatedUpdates {
        nextToken
        __typename
      }
      avatar
      basalBodyTemperatures {
        nextToken
        __typename
      }
      birthday
      contraceptiveMethods {
        nextToken
        __typename
      }
      contraceptiveReminders {
        nextToken
        __typename
      }
      createdAt
      dataProtections {
        nextToken
        __typename
      }
      email
      fertilityWindows {
        nextToken
        __typename
      }
      healthGoals {
        nextToken
        __typename
      }
      id
      medicationLogs {
        nextToken
        __typename
      }
      menstrualHealthInsights {
        nextToken
        __typename
      }
      ovulationCycles {
        nextToken
        __typename
      }
      ovulationPredictions {
        nextToken
        __typename
      }
      ovulationTests {
        nextToken
        __typename
      }
      predictiveAnalytics {
        nextToken
        __typename
      }
      privacySettings {
        nextToken
        __typename
      }
      profileOwner
      progressReports {
        nextToken
        __typename
      }
      supportGroups {
        nextToken
        __typename
      }
      symptomLogs {
        nextToken
        __typename
      }
      updatedAt
      userForums {
        nextToken
        __typename
      }
      uuid
      wearableData {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateWearableData = /* GraphQL */ `
  mutation UpdateWearableData(
    $condition: ModelWearableDataConditionInput
    $input: UpdateWearableDataInput!
  ) {
    updateWearableData(condition: $condition, input: $input) {
      createdAt
      dataType
      dataValue
      deviceId
      id
      owner
      timestamp
      updatedAt
      userProfile {
        avatar
        birthday
        createdAt
        email
        id
        profileOwner
        updatedAt
        uuid
        __typename
      }
      userProfileId
      uuid
      __typename
    }
  }
`;
