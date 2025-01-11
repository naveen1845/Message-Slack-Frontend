import combineContexts from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelModalContextProvider } from './CreateChannelModalContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';
import { CurrentWorkspaceContextProvider } from './CurrentWorkspaceContext';

export const AppContextProvider = combineContexts(
    AuthContextProvider,
    CurrentWorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider,
    CreateChannelModalContextProvider
);