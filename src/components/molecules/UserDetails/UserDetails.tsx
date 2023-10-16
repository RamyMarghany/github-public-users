// Modules
import React from "react";

// Components
import {UserDetailsCard} from "components/atoms/UserDetailsCard/UserDetailsCard"

// Types
import {UserDetailsType} from "types/types"

type UserDetailsProps = {
  users: UserDetailsType[];
};

export const UserDetails: React.FC<UserDetailsProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserDetailsCard key={user.id} userName={user.login} avatarUrl={user.avatar_url} />
      ))}
    </>
  );
};
