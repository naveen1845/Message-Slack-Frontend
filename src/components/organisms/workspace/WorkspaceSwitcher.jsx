import { Loader, Loader2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useFetchWorkspaceDetails } from '@/hooks/apis/workspaces/useFetchWorkspaceDetails';
import { useFetchWorkspaces } from '@/hooks/apis/workspaces/useFetchWorkspaces';

export const WorkspaceSwitcher = () => {

    const { workspaceId } = useParams();

    const navigate = useNavigate();

    const { isFetching: fetchingWorkspaces, workspaces } = useFetchWorkspaces();

    const { workspaceDetails, isFetching } = useFetchWorkspaceDetails(workspaceId);
    return(
        <DropdownMenu >
            <DropdownMenuTrigger className="outline-none">
                <Button className='size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 text-xl'>
                    {isFetching ? (<Loader className="animate-spin" />) : workspaceDetails.name.charAt(0).toUpperCase()}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    {workspaceDetails?.name}
                    <span className="text-green-500">
                        ( Active )
                    </span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {fetchingWorkspaces ? (<Loader2 />) : (workspaces.map((workspace) => {
                    if (workspace._id == workspaceId) {
                        return;
                    }

                    return (
                        <DropdownMenuItem key={workspace._id}
                            onClick={() => navigate(`/workspaces/${workspace._id}`)}
                        >
                            <p>{workspace.name}</p>
                        </DropdownMenuItem>
                    );
                }))}
            </DropdownMenuContent>
            
        </DropdownMenu>
    );
};