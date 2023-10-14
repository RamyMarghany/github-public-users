// Modules
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Repository {
    id: number;
    name: string;
    html_url: string;
}

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
            <h2>Repositories for {username}</h2>
            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}