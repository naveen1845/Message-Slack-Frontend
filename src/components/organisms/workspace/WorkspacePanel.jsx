import { Hash, Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SidebarItem } from '@/components/atoms/SidebarItem/SidebarItem';
import { UserItem } from '@/components/atoms/UserItem/UserItem';
import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useFetchWorkspaceDetails } from '@/hooks/apis/workspaces/useFetchWorkspaceDetails';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();
    const { workspaceDetails, isFetching } = useFetchWorkspaceDetails(workspaceId);

    const { setOpenChannelModal } = useCreateChannelModal();

    return (
        <div>
            <WorkspacePanelHeader workspace={workspaceDetails}/>
            <div>
                
                <WorkspacePanelSection
                    label='Channels'
                    onIconClick={() => {setOpenChannelModal(true);}}
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

                <WorkspacePanelSection
                    label='Members'
                >
                    { isFetching ? <div className="flex justify-center items-center h-full">
                        <Loader2 className="animate-spin text-white" />
                            </div> : ( 
                        workspaceDetails?.members?.map((member) => {
                        return(
                            <UserItem key={member._id}
                                id={member?._id}
                                label={member?.role}
                                image={member?.memberId?.avatar}
                                username={member?.memberId?.username}
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