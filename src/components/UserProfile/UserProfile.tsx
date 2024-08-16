import { AuthContext } from "@/src/contexts/providers/ProviderAuth";
import { _UserProfile } from "@/data-schema";
import { useContext, useEffect, useState, useCallback } from "react";

import { Schema } from "@/data-schema";
import { generateClient } from "aws-amplify/data";

export default function UserProfile() {
  const { state: auth } = useContext(AuthContext);
  const [profile, setProfile] = useState<_UserProfile>();
  const client = generateClient<Schema>();

  const getProfile = useCallback(async () => {
    const { data: profiles } = await client.models.UserProfile.list({
      filter: {
        email: {
          eq: auth?.attributes?.email,
        },
      },
    });
    profiles.length && setProfile(profiles[0]);
  }, [client.models.UserProfile, auth]);

  useEffect(() => {
    getProfile();
  }, [client.models.UserProfile, auth]);

  return <>testbug</>;
}
