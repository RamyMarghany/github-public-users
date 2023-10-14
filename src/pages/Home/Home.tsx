// Modules
import { useState } from 'react';
import axios from 'axios';

// Components
import { Input } from "components/atoms/Input/Input";
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import {UserDetails} from "components/atoms/UserDetails/UserDetails"
interface User {
    login: string;
    id:number;
    score?: number;
    avatar_url:string;
}

export const Home: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const [errorMessage, setErrorMessage] = useState<any>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchUsers();
        }
    };

    const searchUsers = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${searchInput.toLocaleLowerCase()}&per_page=5`
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
            
                <Input placeholder="Enter the username..." value={searchInput} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress} />
                <button onClick={searchUsers}>Search</button>

                <div className="search-result">
                    {errorMessage ? <ErrorMessage>{errorMessage.message}</ErrorMessage> :
                    <UserDetails users={users}/>
                        // <ul>
                        //     {users.map((user: any) => (
                        //         <li key={user.id}>
                        //             <div>
                        //                 <a href={`/user/${user.login}`}>{user.login}</a>
                        //                 {user.score}
                        //                 <img alt="avatar" src={user.avatar_url}/>
                        //             </div>
                        //         </li>
                        //     ))}
                        // </ul>
                        }
                </div>
            </main>
        </div>
    )
}