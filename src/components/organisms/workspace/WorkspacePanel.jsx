import { Hash, Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SidebarItem } from '@/components/atoms/SidebarItem/SidebarItem';
import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useFetchWorkspaceDetails } from '@/hooks/apis/workspaces/useFetchWorkspaceDetails';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();
    const { workspaceDetails, isFetching } = useFetchWorkspaceDetails(workspaceId);

    return (
        <div>
            <WorkspacePanelHeader workspace={workspaceDetails}/>
            <div>
                
                <WorkspacePanelSection
                    label='Channels'
                >
                    <SidebarItem 
                        icon={Hash}
                        label={'sample'}
                        id={'sample'}
                        variant='active'
                    />
                    { isFetching ? <div className="flex justify-center items-center h-full">
                        <Loader2 className="animate-spin text-white" />
                            </div> : ( 
                        workspaceDetails?.channels?.map((channel) => {
                        return(
                            <SidebarItem 
                                key={channel._id}
                                icon={Hash}
                                label={channel.name}
                                id={channel._id}
                            />
                        );
                    })
                    )
                }
                </WorkspacePanelSection>
            </div>
        </div>
    );
};