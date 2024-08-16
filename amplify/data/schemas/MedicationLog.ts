import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const MedicationLog = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    medicationName: a.string(),
    dose: a.string(),
    startDate: a.date(),
    endDate: a.date(),
    notes: a.string(),
  })
  .authorization((allow) => [allow.owner()]);
