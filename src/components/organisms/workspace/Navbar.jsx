import { InfoIcon, Loader2Icon, SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useFetchWorkspaceDetails } from '@/hooks/apis/workspaces/useFetchWorkspaceDetails';
import { useAuth } from '@/hooks/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useToast } from '@/hooks/use-toast';

export const Navbar = () => {

    const { workspaceId } = useParams();
    

    const { workspaceDetails, isFetching, isSuccess, error } = useFetchWorkspaceDetails(workspaceId);

    const { setCurrentWorkspace } = useCurrentWorkspace();

    const navigate = useNavigate();

    const { logout } = useAuth();

    const {toast} = useToast();

    useEffect(() => {
        console.log('navbar mounted');
        console.log('isFetching:', isFetching);
        console.log('isSuccess:', isSuccess);
        console.log('error:', error);

        if(!isFetching && !isSuccess && error ) {
            console.log('Error fetching workspace', error);
            if(error.status === 403) {
                logout();
                navigate('/auth/signin');
            }
            toast({
                title: 'Your session is over',
                description: 'Please sign in to continue',
                variant: 'destructive',
            });
        }

        if (workspaceDetails) {
            setCurrentWorkspace(workspaceDetails);
        }
    }, [setCurrentWorkspace, workspaceDetails, isFetching, isSuccess, error, navigate]);

    if(isFetching){
        <Loader2Icon className='animate-spin' />;
    }
    return (
        <nav
            className='flex items-center justify-center h-10 p-1.5 bg-black'
        >
            <div className='flex-1' />
            <div>
                <Button
                    size='sm'
                    className='bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2'
                >
                    <SearchIcon className='size-5 text-white mr-2' />
                    <span className='text-white text-xs'>
                        Search {workspaceDetails?.name || 'Workspace'} 
                    </span>
                </Button>
            </div>
            <div
                className='ml-auto flex-1 flex items-center justify-end'
            >
                <Button
                    variant='transparent'
                    size='iconSm'
                >
                    <InfoIcon className='size-5 text-white' />
                </Button>
            </div>
        </nav>
    );
};