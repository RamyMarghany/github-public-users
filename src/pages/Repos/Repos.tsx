// Modules
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Component
import { RepoList } from "components/molecules/ReposList/ReposList";

// Types
import { Repository } from "types/types";

// Styles
import * as Styled from "./Repos.styled";

export const Repos: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepositories(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRepositories();
    }, [username]);
    return (
        <div>
            <Styled.Headline>Repositories for {username}</Styled.Headline>
            {repositories.length > 0 ?
                (<RepoList RepositoryArray={repositories} />)
                :
                (<Styled.NoRepo>there are no repos for {username}</Styled.NoRepo>)
            }
            <Styled.BackButton to="/"> Back to home page</Styled.BackButton>
        </div>
    )
}