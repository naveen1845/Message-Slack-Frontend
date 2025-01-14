import { useMutation } from '@tanstack/react-query';

import { joinWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useJoinWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: joinWorkspaceMutation} = useMutation({
        mutationFn: (joinId) => joinWorkspaceRequest({workspaceId, joinId, token: auth?.token}),
        onSuccess: () => {
            console.log('User Joined successfully');
            
        },
        onError: () => {
            console.log('error joinig the workspace', error);
            
        }
    });
    return {
        isPending, 
        isSuccess, 
        error,
        joinWorkspaceMutation
    };
};