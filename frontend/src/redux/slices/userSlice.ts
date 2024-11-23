import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Message {
    user: string;
    id: string,
    message: string;
}

interface userState {
    username: string;
    id: string;
    typedMessage: string;
    messages: Message[];
    isLoggedIn: boolean;
}

const initialState: userState = {
    username: '',
    id: '',
    typedMessage: '', 
    messages: [],
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload; 
        },
        
        setId: (state, action: PayloadAction<string>) => {
            state.id= action.payload; 
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

        setMessages: (state, action:  PayloadAction<Message[]>) => {
            state.messages = [...state.messages, ...action.payload];
        }
    }, 
});

export const { setUserName, setId, clearUserName, setIsLoggedIn, setTypedMessage, setMessages } = userSlice.actions;
export default userSlice.reducer;