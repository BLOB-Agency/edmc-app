import {createContext, useState} from "react";

const EMPTY_USER = {
    username: '',
    email: '',
};

const UserContext = createContext({
    user: EMPTY_USER,
    updateUser: (newUser) => {},
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(EMPTY_USER);

    const updateUser = (newUser) => {
        console.debug('[UserContext] Updating user:', newUser);

        setUser(newUser);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;