import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const ContraceptiveMethod = a
  .model({
    uuid: a.string().required(),
    name: a.string(),
    description: a.string(),
    sideEffects: a.string().array(),
    userProfileId: a.id(),
    userProfile: a.belongsTo(m.UserProfile, "userProfileId"),
  })
  .authorization((allow) => [allow.owner()]);
