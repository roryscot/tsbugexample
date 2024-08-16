import { __, mMap } from "@avaelus/super-project-utils";

const CUSTOM_ROUTES_BLUEPRINTS = {
  userProfile: __,
  transaction: {
    ":transactionId": __,
  },
};

export const customRoutes = mMap(CUSTOM_ROUTES_BLUEPRINTS);

export default CUSTOM_ROUTES_BLUEPRINTS;
