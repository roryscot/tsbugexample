import { ProviderClientContext } from "@/src/contexts/providers/ProviderClient/ProviderClient";
import { AuthContext } from "@/src/contexts/providers/ProviderAuth";
import { _UserProfile } from "@/data-schema";
import { useContext, useEffect, useState, useCallback } from "react";

// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "@/src/contexts/routes";
import { UserProfileUpdateForm } from "@/src/components";

export default function UserProfile() {
  const { state: auth } = useContext(AuthContext);
  const [profile, setProfile] = useState<_UserProfile>();
  const client = useContext(ProviderClientContext);
  //   const nav = useNavigate();
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
  }, [client.models.UserProfile, auth, getProfile]);

  return (
    <UserProfileUpdateForm
      userProfile={profile}
      overrides={{
        uuid: {
          display: "none",
          disabled: true,
        },
        email: {
          display: "none",
          disabled: true,
        },
        profileOwner: {
          display: "none",
          disabled: true,
        },
        avatar: {
          display: "none",
          disabled: true,
        },
      }}
    />
  );
}
