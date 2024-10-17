import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignerState {
  token: string | null;
}

const initialState: SignerState = {
  token: '',
};

export const SignerReducer = createSlice({
  name: 'signer',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<SignerState['token']>) {
      return { ...state, token: action.payload };
    },
    clearToken(state) {
      return { ...state, token: null };
    },
  },
});

export const { setToken, clearToken } = SignerReducer.actions;
export default SignerReducer.reducer;
