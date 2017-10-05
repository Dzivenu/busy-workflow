import { combineReducers } from 'redux';
import trending from './trendingReducer';

const reducer = combineReducers({
	trending
});

export default reducer;