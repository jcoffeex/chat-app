import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
    username: string;
    isLoggedIn: boolean;
}

const initialState: LoginState = {
    username: '',
    isLoggedIn: false,
};

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload; 
        },
        
        clearUserName: (state) => {
            state.username = ''; 
        },
        
    }, 
});

export const { setUserName, clearUserName } = loginSlice.actions;
export default loginSlice.reducer;