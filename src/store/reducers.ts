import { combineReducers } from '@reduxjs/toolkit';
import SignerReducer from './ducks/Signer';

const rootReducer = combineReducers({
  signer: SignerReducer,
});

export default rootReducer;
