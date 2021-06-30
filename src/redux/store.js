import { configureStore } from '@reduxjs/toolkit';

import robotsReducer from './reducers/robots';

export default configureStore({
    reducer: {
        robots: robotsReducer,
    }
});
