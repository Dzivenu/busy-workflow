import { Record } from 'immutable';

const initialState = new (Record({

}))()

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		default:
        	return state
  	}
}
