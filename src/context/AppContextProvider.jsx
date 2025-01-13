import combineContexts from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelModalContextProvider } from './CreateChannelModalContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { CurrentWorkspaceContextProvider } from './CurrentWorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';

export const AppContextProvider = combineContexts(
    AuthContextProvider,
    CurrentWorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider,
    CreateChannelModalContextProvider
);