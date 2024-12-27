import combineContexts from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';

export const AppContextProvider = combineContexts(
    AuthContextProvider,
);