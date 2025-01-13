import { useContext } from 'react';

import CurrentWorkspaceContext from '@/context/CurrentWorkspaceContext';

export const useCurrentWorkspace = () => {
    return useContext(CurrentWorkspaceContext);
};