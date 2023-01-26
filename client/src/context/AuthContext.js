import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adults: undefined,
        children: undefined,
        rooms: undefined,
    },
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state,action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE)

return(
    <AuthContext.Provider value={{ city: state.city, dates: state.dates, options: state.options, dispatch }}>
        {children}
    </AuthContext.Provider>
)

};