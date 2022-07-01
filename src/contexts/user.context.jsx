import {
    createContext,
//    useState,  // insertion of userReducer made this obsolete
    useEffect,
    useReducer
} from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    curentUser: null,
});
   
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider  = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null); // React Way
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    
    const setCurrentUser = (user) => 
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/* 
const userReducer = (state, action) => {
    return {
    curentUser
    }
}

*/