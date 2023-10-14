// Modules
import { useState } from 'react';
import axios from 'axios';

// Components
import { Input } from "components/atoms/Input/Input";
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';

// Style
import "./Home.scss";

export const Home = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState<any>('');
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchUsers();
        }
    };

    const searchUsers = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${searchInput}&per_page=5`
            );
            setUsers(response.data.items);
        } catch (error) {
            setErrorMessage(error)
        }
    };

    return (
        <div className="main-wrapper">
            <main className="main-wrapper__container">
            <h1>Github User Search and Repositories</h1>  
            
                <Input placeholder="Enter your book name..." value={searchInput} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress} />
                <button onClick={searchUsers}>Search</button>

                <div className="search-result">
                    {errorMessage ? <ErrorMessage>{errorMessage.message}</ErrorMessage> :
                        <ul>
                            {users.map((user: any) => (
                                <li key={user.id}>
                                    {user.login}
                                </li>
                            ))}
                        </ul>
                        }
                </div>
            </main>
        </div>
    )
}