import combineContexts from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';

export const AppContextProvider = combineContexts(
    AuthContextProvider,
    CreateWorkspaceContextProvider
);