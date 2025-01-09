
import { useContext } from 'react';

import WorkspacePreferenceModalContext from '@/context/WorkspacePreferenceModalContext';

export const useWorkspacePreferenceModal = () => {
    return useContext(WorkspacePreferenceModalContext);
};