import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { useFetchWorkspaceDetails } from "@/hooks/apis/workspaces/useFetchWorkspaceDetails";
import { useParams } from "react-router-dom";

export const WorkspacePanel = () => {

    const { workspaceId } = useParams()
    const { workspaceDetails, isFetching } = useFetchWorkspaceDetails(workspaceId)

    return (
        <div>
            <WorkspacePanelHeader workspace={workspaceDetails}/>
        </div>
    );
};