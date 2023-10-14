import React from 'react';

type UserDetailsProps = {
  users: {
    login: string;
    id:number;
    score?: number;
    avatar_url:string;
  }[];
};

export const UserDetails: React.FC<UserDetailsProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.login}</h2>
          <a href={`/user/${user.login}`}>User Repos</a>
          <p>{user.score ?? 'No score available'}</p>
          <img alt="avatar" src={user.avatar_url}/>
        </li>
      ))}
    </ul>
  );
};
