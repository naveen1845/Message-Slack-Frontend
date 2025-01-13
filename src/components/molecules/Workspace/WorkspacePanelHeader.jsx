import { ChevronDown, FilterIcon, Settings, SquarePenIcon, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useWorkspacePreferenceModal } from '@/hooks/context/useWorkspacePreferenceModal';

import { InviteModal } from '../InviteModal/InviteModal';

export const WorkspacePanelHeader = ( { workspace } ) => {

    const [ openInviteModal, setOpenInviteModal ] = useState(false);

    const { auth } = useAuth();

    const { setOpenPreference, setWorkspace} = useWorkspacePreferenceModal();

    const workspaceMembers = workspace?.members;
    

    const isLoggedInMemberAdmin = workspaceMembers?.find((member) => {
        return member.memberId === auth?.user?._id && member.role === 'admin';
    });

    useEffect(() => {
        setWorkspace(workspace);
    }, [workspace]);

    return (
        <div className="px-2 py-3 h-[60px] flex items-center justify-between gap-3">
            <InviteModal 
                openInviteModal={openInviteModal}
                setOpenInviteModal={setOpenInviteModal}
                workspace={workspace}
            />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button 
                        className="bg-stone-800 hover:bg-stone-700 flex gap-5"
                        size='sm'
                    >
                        <span>{workspace?.name}</span>
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                    <DropdownMenuItem>
                        <div className="flex justify-center items-center text-lg rounded-md font-semibold size-9 bg-slack text-violet-800">
                            {workspace?.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-bold text-md ml-1">
                            {workspace?.name}
                            <p className="text-xs text-muted-foreground font-normal">
                                <span className="text-green-500">Active</span> Workspace
                            </p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {isLoggedInMemberAdmin && (
                        <>
                            <DropdownMenuItem className="cursor-pointer py-3" onClick={() => setOpenPreference(true)}>
                                <Settings />
                                Preferences
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer py-3" onClick={() => setOpenInviteModal(true)}>
                                <UserPlus/>
                                Invite
                            </DropdownMenuItem>
                        </>

                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex gap-3">
                <Button
                    size='xs'
                >
                    <FilterIcon />
                </Button>
                <Button
                    size='xs'
                >
                    <SquarePenIcon />
                </Button>
            </div>
        </div>
    );
};