import { createStore } from 'redux';
import reducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('../reducers').default);
        });
    }
    return store;
}
