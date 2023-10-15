// Modules
import React, { useState } from 'react';
import axios from 'axios';

// Components
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import { UserDetails } from 'components/molecules/UserDetails/UserDetails';

// Types
import { UserDetailsType } from 'types/types';

// Styles
import * as Styled from './Home.styled';

export const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [users, setUsers] = useState<UserDetailsType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>(''); // Set the type for errorMessage

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchUsers();
    }
  };

  const searchUsers = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchInput.toLowerCase()}&per_page=5`
      );
      setUsers(response.data.items);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error:any) {
      setErrorMessage(error.message); // Store the error message
      setUsers([]); // Clear user data in case of an error
    }
  };

  const isSearchDisabled = searchInput.trim() === '';

  return (
    <div>
      <Styled.Headline>Github User Search and Repositories</Styled.Headline>
      <Styled.SearchWrapper>
        <Input
          placeholder="Enter the username..."
          value={searchInput}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          onKeyPress={handleKeyPress}
        />
        <Button onClickHandler={searchUsers} disabled={isSearchDisabled}>Search</Button>
      </Styled.SearchWrapper>

      <Styled.SearchResultWrapper>
        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          <UserDetails users={users} />
        )}
      </Styled.SearchResultWrapper>
    </div>
  );
};
