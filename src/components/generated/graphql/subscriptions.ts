/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $owner: String
  ) {
    onCreateArticle(filter: $filter, owner: $owner) {
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
export const onCreateAutomatedUpdate = /* GraphQL */ `
  subscription OnCreateAutomatedUpdate(
    $filter: ModelSubscriptionAutomatedUpdateFilterInput
    $owner: String
  ) {
    onCreateAutomatedUpdate(filter: $filter, owner: $owner) {
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
export const onCreateBasalBodyTemperature = /* GraphQL */ `
  subscription OnCreateBasalBodyTemperature(
    $filter: ModelSubscriptionBasalBodyTemperatureFilterInput
    $owner: String
  ) {
    onCreateBasalBodyTemperature(filter: $filter, owner: $owner) {
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
export const onCreateContraceptiveMethod = /* GraphQL */ `
  subscription OnCreateContraceptiveMethod(
    $filter: ModelSubscriptionContraceptiveMethodFilterInput
    $owner: String
  ) {
    onCreateContraceptiveMethod(filter: $filter, owner: $owner) {
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
export const onCreateContraceptiveReminder = /* GraphQL */ `
  subscription OnCreateContraceptiveReminder(
    $filter: ModelSubscriptionContraceptiveReminderFilterInput
    $owner: String
  ) {
    onCreateContraceptiveReminder(filter: $filter, owner: $owner) {
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
export const onCreateDataProtection = /* GraphQL */ `
  subscription OnCreateDataProtection(
    $filter: ModelSubscriptionDataProtectionFilterInput
    $owner: String
  ) {
    onCreateDataProtection(filter: $filter, owner: $owner) {
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
export const onCreateFAQ = /* GraphQL */ `
  subscription OnCreateFAQ(
    $filter: ModelSubscriptionFAQFilterInput
    $owner: String
  ) {
    onCreateFAQ(filter: $filter, owner: $owner) {
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
export const onCreateFertilityWindow = /* GraphQL */ `
  subscription OnCreateFertilityWindow(
    $filter: ModelSubscriptionFertilityWindowFilterInput
    $owner: String
  ) {
    onCreateFertilityWindow(filter: $filter, owner: $owner) {
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
export const onCreateHealthGoal = /* GraphQL */ `
  subscription OnCreateHealthGoal(
    $filter: ModelSubscriptionHealthGoalFilterInput
    $owner: String
  ) {
    onCreateHealthGoal(filter: $filter, owner: $owner) {
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
export const onCreateMedicationLog = /* GraphQL */ `
  subscription OnCreateMedicationLog(
    $filter: ModelSubscriptionMedicationLogFilterInput
    $owner: String
  ) {
    onCreateMedicationLog(filter: $filter, owner: $owner) {
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
export const onCreateMenstrualHealthInsight = /* GraphQL */ `
  subscription OnCreateMenstrualHealthInsight(
    $filter: ModelSubscriptionMenstrualHealthInsightFilterInput
    $owner: String
  ) {
    onCreateMenstrualHealthInsight(filter: $filter, owner: $owner) {
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
export const onCreateOvulationCycle = /* GraphQL */ `
  subscription OnCreateOvulationCycle(
    $filter: ModelSubscriptionOvulationCycleFilterInput
    $owner: String
  ) {
    onCreateOvulationCycle(filter: $filter, owner: $owner) {
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
export const onCreateOvulationCycleAnalysis = /* GraphQL */ `
  subscription OnCreateOvulationCycleAnalysis(
    $filter: ModelSubscriptionOvulationCycleAnalysisFilterInput
    $owner: String
  ) {
    onCreateOvulationCycleAnalysis(filter: $filter, owner: $owner) {
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
export const onCreateOvulationPrediction = /* GraphQL */ `
  subscription OnCreateOvulationPrediction(
    $filter: ModelSubscriptionOvulationPredictionFilterInput
    $owner: String
  ) {
    onCreateOvulationPrediction(filter: $filter, owner: $owner) {
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
export const onCreateOvulationTest = /* GraphQL */ `
  subscription OnCreateOvulationTest(
    $filter: ModelSubscriptionOvulationTestFilterInput
    $owner: String
  ) {
    onCreateOvulationTest(filter: $filter, owner: $owner) {
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
export const onCreatePredictiveAnalytics = /* GraphQL */ `
  subscription OnCreatePredictiveAnalytics(
    $filter: ModelSubscriptionPredictiveAnalyticsFilterInput
    $owner: String
  ) {
    onCreatePredictiveAnalytics(filter: $filter, owner: $owner) {
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
export const onCreatePrivacySetting = /* GraphQL */ `
  subscription OnCreatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
    $owner: String
  ) {
    onCreatePrivacySetting(filter: $filter, owner: $owner) {
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
export const onCreateProgressReport = /* GraphQL */ `
  subscription OnCreateProgressReport(
    $filter: ModelSubscriptionProgressReportFilterInput
    $owner: String
  ) {
    onCreateProgressReport(filter: $filter, owner: $owner) {
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
export const onCreateSupportGroup = /* GraphQL */ `
  subscription OnCreateSupportGroup(
    $filter: ModelSubscriptionSupportGroupFilterInput
    $owner: String
  ) {
    onCreateSupportGroup(filter: $filter, owner: $owner) {
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
export const onCreateSymptomLog = /* GraphQL */ `
  subscription OnCreateSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
    $owner: String
  ) {
    onCreateSymptomLog(filter: $filter, owner: $owner) {
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
export const onCreateUserForum = /* GraphQL */ `
  subscription OnCreateUserForum(
    $filter: ModelSubscriptionUserForumFilterInput
    $owner: String
  ) {
    onCreateUserForum(filter: $filter, owner: $owner) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
export const onCreateWearableData = /* GraphQL */ `
  subscription OnCreateWearableData(
    $filter: ModelSubscriptionWearableDataFilterInput
    $owner: String
  ) {
    onCreateWearableData(filter: $filter, owner: $owner) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $owner: String
  ) {
    onDeleteArticle(filter: $filter, owner: $owner) {
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
export const onDeleteAutomatedUpdate = /* GraphQL */ `
  subscription OnDeleteAutomatedUpdate(
    $filter: ModelSubscriptionAutomatedUpdateFilterInput
    $owner: String
  ) {
    onDeleteAutomatedUpdate(filter: $filter, owner: $owner) {
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
export const onDeleteBasalBodyTemperature = /* GraphQL */ `
  subscription OnDeleteBasalBodyTemperature(
    $filter: ModelSubscriptionBasalBodyTemperatureFilterInput
    $owner: String
  ) {
    onDeleteBasalBodyTemperature(filter: $filter, owner: $owner) {
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
export const onDeleteContraceptiveMethod = /* GraphQL */ `
  subscription OnDeleteContraceptiveMethod(
    $filter: ModelSubscriptionContraceptiveMethodFilterInput
    $owner: String
  ) {
    onDeleteContraceptiveMethod(filter: $filter, owner: $owner) {
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
export const onDeleteContraceptiveReminder = /* GraphQL */ `
  subscription OnDeleteContraceptiveReminder(
    $filter: ModelSubscriptionContraceptiveReminderFilterInput
    $owner: String
  ) {
    onDeleteContraceptiveReminder(filter: $filter, owner: $owner) {
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
export const onDeleteDataProtection = /* GraphQL */ `
  subscription OnDeleteDataProtection(
    $filter: ModelSubscriptionDataProtectionFilterInput
    $owner: String
  ) {
    onDeleteDataProtection(filter: $filter, owner: $owner) {
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
export const onDeleteFAQ = /* GraphQL */ `
  subscription OnDeleteFAQ(
    $filter: ModelSubscriptionFAQFilterInput
    $owner: String
  ) {
    onDeleteFAQ(filter: $filter, owner: $owner) {
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
export const onDeleteFertilityWindow = /* GraphQL */ `
  subscription OnDeleteFertilityWindow(
    $filter: ModelSubscriptionFertilityWindowFilterInput
    $owner: String
  ) {
    onDeleteFertilityWindow(filter: $filter, owner: $owner) {
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
export const onDeleteHealthGoal = /* GraphQL */ `
  subscription OnDeleteHealthGoal(
    $filter: ModelSubscriptionHealthGoalFilterInput
    $owner: String
  ) {
    onDeleteHealthGoal(filter: $filter, owner: $owner) {
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
export const onDeleteMedicationLog = /* GraphQL */ `
  subscription OnDeleteMedicationLog(
    $filter: ModelSubscriptionMedicationLogFilterInput
    $owner: String
  ) {
    onDeleteMedicationLog(filter: $filter, owner: $owner) {
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
export const onDeleteMenstrualHealthInsight = /* GraphQL */ `
  subscription OnDeleteMenstrualHealthInsight(
    $filter: ModelSubscriptionMenstrualHealthInsightFilterInput
    $owner: String
  ) {
    onDeleteMenstrualHealthInsight(filter: $filter, owner: $owner) {
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
export const onDeleteOvulationCycle = /* GraphQL */ `
  subscription OnDeleteOvulationCycle(
    $filter: ModelSubscriptionOvulationCycleFilterInput
    $owner: String
  ) {
    onDeleteOvulationCycle(filter: $filter, owner: $owner) {
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
export const onDeleteOvulationCycleAnalysis = /* GraphQL */ `
  subscription OnDeleteOvulationCycleAnalysis(
    $filter: ModelSubscriptionOvulationCycleAnalysisFilterInput
    $owner: String
  ) {
    onDeleteOvulationCycleAnalysis(filter: $filter, owner: $owner) {
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
export const onDeleteOvulationPrediction = /* GraphQL */ `
  subscription OnDeleteOvulationPrediction(
    $filter: ModelSubscriptionOvulationPredictionFilterInput
    $owner: String
  ) {
    onDeleteOvulationPrediction(filter: $filter, owner: $owner) {
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
export const onDeleteOvulationTest = /* GraphQL */ `
  subscription OnDeleteOvulationTest(
    $filter: ModelSubscriptionOvulationTestFilterInput
    $owner: String
  ) {
    onDeleteOvulationTest(filter: $filter, owner: $owner) {
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
export const onDeletePredictiveAnalytics = /* GraphQL */ `
  subscription OnDeletePredictiveAnalytics(
    $filter: ModelSubscriptionPredictiveAnalyticsFilterInput
    $owner: String
  ) {
    onDeletePredictiveAnalytics(filter: $filter, owner: $owner) {
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
export const onDeletePrivacySetting = /* GraphQL */ `
  subscription OnDeletePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
    $owner: String
  ) {
    onDeletePrivacySetting(filter: $filter, owner: $owner) {
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
export const onDeleteProgressReport = /* GraphQL */ `
  subscription OnDeleteProgressReport(
    $filter: ModelSubscriptionProgressReportFilterInput
    $owner: String
  ) {
    onDeleteProgressReport(filter: $filter, owner: $owner) {
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
export const onDeleteSupportGroup = /* GraphQL */ `
  subscription OnDeleteSupportGroup(
    $filter: ModelSubscriptionSupportGroupFilterInput
    $owner: String
  ) {
    onDeleteSupportGroup(filter: $filter, owner: $owner) {
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
export const onDeleteSymptomLog = /* GraphQL */ `
  subscription OnDeleteSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
    $owner: String
  ) {
    onDeleteSymptomLog(filter: $filter, owner: $owner) {
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
export const onDeleteUserForum = /* GraphQL */ `
  subscription OnDeleteUserForum(
    $filter: ModelSubscriptionUserForumFilterInput
    $owner: String
  ) {
    onDeleteUserForum(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
export const onDeleteWearableData = /* GraphQL */ `
  subscription OnDeleteWearableData(
    $filter: ModelSubscriptionWearableDataFilterInput
    $owner: String
  ) {
    onDeleteWearableData(filter: $filter, owner: $owner) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle(
    $filter: ModelSubscriptionArticleFilterInput
    $owner: String
  ) {
    onUpdateArticle(filter: $filter, owner: $owner) {
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
export const onUpdateAutomatedUpdate = /* GraphQL */ `
  subscription OnUpdateAutomatedUpdate(
    $filter: ModelSubscriptionAutomatedUpdateFilterInput
    $owner: String
  ) {
    onUpdateAutomatedUpdate(filter: $filter, owner: $owner) {
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
export const onUpdateBasalBodyTemperature = /* GraphQL */ `
  subscription OnUpdateBasalBodyTemperature(
    $filter: ModelSubscriptionBasalBodyTemperatureFilterInput
    $owner: String
  ) {
    onUpdateBasalBodyTemperature(filter: $filter, owner: $owner) {
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
export const onUpdateContraceptiveMethod = /* GraphQL */ `
  subscription OnUpdateContraceptiveMethod(
    $filter: ModelSubscriptionContraceptiveMethodFilterInput
    $owner: String
  ) {
    onUpdateContraceptiveMethod(filter: $filter, owner: $owner) {
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
export const onUpdateContraceptiveReminder = /* GraphQL */ `
  subscription OnUpdateContraceptiveReminder(
    $filter: ModelSubscriptionContraceptiveReminderFilterInput
    $owner: String
  ) {
    onUpdateContraceptiveReminder(filter: $filter, owner: $owner) {
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
export const onUpdateDataProtection = /* GraphQL */ `
  subscription OnUpdateDataProtection(
    $filter: ModelSubscriptionDataProtectionFilterInput
    $owner: String
  ) {
    onUpdateDataProtection(filter: $filter, owner: $owner) {
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
export const onUpdateFAQ = /* GraphQL */ `
  subscription OnUpdateFAQ(
    $filter: ModelSubscriptionFAQFilterInput
    $owner: String
  ) {
    onUpdateFAQ(filter: $filter, owner: $owner) {
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
export const onUpdateFertilityWindow = /* GraphQL */ `
  subscription OnUpdateFertilityWindow(
    $filter: ModelSubscriptionFertilityWindowFilterInput
    $owner: String
  ) {
    onUpdateFertilityWindow(filter: $filter, owner: $owner) {
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
export const onUpdateHealthGoal = /* GraphQL */ `
  subscription OnUpdateHealthGoal(
    $filter: ModelSubscriptionHealthGoalFilterInput
    $owner: String
  ) {
    onUpdateHealthGoal(filter: $filter, owner: $owner) {
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
export const onUpdateMedicationLog = /* GraphQL */ `
  subscription OnUpdateMedicationLog(
    $filter: ModelSubscriptionMedicationLogFilterInput
    $owner: String
  ) {
    onUpdateMedicationLog(filter: $filter, owner: $owner) {
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
export const onUpdateMenstrualHealthInsight = /* GraphQL */ `
  subscription OnUpdateMenstrualHealthInsight(
    $filter: ModelSubscriptionMenstrualHealthInsightFilterInput
    $owner: String
  ) {
    onUpdateMenstrualHealthInsight(filter: $filter, owner: $owner) {
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
export const onUpdateOvulationCycle = /* GraphQL */ `
  subscription OnUpdateOvulationCycle(
    $filter: ModelSubscriptionOvulationCycleFilterInput
    $owner: String
  ) {
    onUpdateOvulationCycle(filter: $filter, owner: $owner) {
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
export const onUpdateOvulationCycleAnalysis = /* GraphQL */ `
  subscription OnUpdateOvulationCycleAnalysis(
    $filter: ModelSubscriptionOvulationCycleAnalysisFilterInput
    $owner: String
  ) {
    onUpdateOvulationCycleAnalysis(filter: $filter, owner: $owner) {
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
export const onUpdateOvulationPrediction = /* GraphQL */ `
  subscription OnUpdateOvulationPrediction(
    $filter: ModelSubscriptionOvulationPredictionFilterInput
    $owner: String
  ) {
    onUpdateOvulationPrediction(filter: $filter, owner: $owner) {
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
export const onUpdateOvulationTest = /* GraphQL */ `
  subscription OnUpdateOvulationTest(
    $filter: ModelSubscriptionOvulationTestFilterInput
    $owner: String
  ) {
    onUpdateOvulationTest(filter: $filter, owner: $owner) {
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
export const onUpdatePredictiveAnalytics = /* GraphQL */ `
  subscription OnUpdatePredictiveAnalytics(
    $filter: ModelSubscriptionPredictiveAnalyticsFilterInput
    $owner: String
  ) {
    onUpdatePredictiveAnalytics(filter: $filter, owner: $owner) {
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
export const onUpdatePrivacySetting = /* GraphQL */ `
  subscription OnUpdatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
    $owner: String
  ) {
    onUpdatePrivacySetting(filter: $filter, owner: $owner) {
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
export const onUpdateProgressReport = /* GraphQL */ `
  subscription OnUpdateProgressReport(
    $filter: ModelSubscriptionProgressReportFilterInput
    $owner: String
  ) {
    onUpdateProgressReport(filter: $filter, owner: $owner) {
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
export const onUpdateSupportGroup = /* GraphQL */ `
  subscription OnUpdateSupportGroup(
    $filter: ModelSubscriptionSupportGroupFilterInput
    $owner: String
  ) {
    onUpdateSupportGroup(filter: $filter, owner: $owner) {
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
export const onUpdateSymptomLog = /* GraphQL */ `
  subscription OnUpdateSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
    $owner: String
  ) {
    onUpdateSymptomLog(filter: $filter, owner: $owner) {
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
export const onUpdateUserForum = /* GraphQL */ `
  subscription OnUpdateUserForum(
    $filter: ModelSubscriptionUserForumFilterInput
    $owner: String
  ) {
    onUpdateUserForum(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
export const onUpdateWearableData = /* GraphQL */ `
  subscription OnUpdateWearableData(
    $filter: ModelSubscriptionWearableDataFilterInput
    $owner: String
  ) {
    onUpdateWearableData(filter: $filter, owner: $owner) {
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
