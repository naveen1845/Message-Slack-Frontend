import combineContexts from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';

export const AppContextProvider = combineContexts(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider
);