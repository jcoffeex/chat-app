import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userState {
    username: string;
    typedMessage: string;
    messageReceived: string;
    isLoggedIn: boolean;
}

const initialState: userState = {
    username: '',
    typedMessage: '',
    messageReceived: '',
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload; 
        },
        
        clearUserName: (state) => {
            state.username = ''; 
        },

        setIsLoggedIn: (state, action:  PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },

        setTypedMessage: (state, action:  PayloadAction<string>) => {
            state.typedMessage = action.payload;
        },

        setMessageReceived: (state, action:  PayloadAction<string>) => {
            state.messageReceived = action.payload;
        }
        
    }, 
});

export const { setUserName, clearUserName, setIsLoggedIn, setTypedMessage, setMessageReceived } = userSlice.actions;
export default userSlice.reducer;