import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const ContraceptiveReminder = a
  .model({
    uuid: a.string().required(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
    contraceptiveMethod: a.string(),
    reminderTime: a.time(),
    status: a.string(), // e.g., 'Pending', 'Completed'
  })
  .authorization((allow) => [allow.owner()]);
