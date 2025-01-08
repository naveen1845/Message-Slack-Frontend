import { useParams } from 'react-router-dom';

import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { useFetchWorkspaceDetails } from '@/hooks/apis/workspaces/useFetchWorkspaceDetails';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();
    const { workspaceDetails } = useFetchWorkspaceDetails(workspaceId);

    return (
        <div>
            <WorkspacePanelHeader workspace={workspaceDetails}/>
        </div>
    );
};