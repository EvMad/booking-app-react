const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adults: undefined,
        children: undefined,
        rooms: undefined,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state,action) => {
    switch(action.type){
        case "NEW_SEARCG"
    }
}