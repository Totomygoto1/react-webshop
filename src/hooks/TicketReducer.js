import { useReducer } from 'react';

export const initialState = { amount: 1 };

export const reducer = (state, action) => {

    switch (action.type) {
      case 'ADD':
        return { amount: state.amount + 1 };
      case 'RETRACT':
	    if (state.amount === 1) {
		  return { amount : 1 }
		}
		else {
		  return { amount: state.amount - 1 };	
		}
      default:
        return state;
    }
	
}; 