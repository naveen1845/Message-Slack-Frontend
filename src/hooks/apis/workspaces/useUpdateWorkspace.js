import { useMutation } from '@tanstack/react-query';

import { updateWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useUpdateWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    console.log('auth obj:', auth);
    
    const { isSuccess, isPending, error, mutateAsync: updateWorkpaceMutation} = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({name: name, workspaceId: workspaceId, token: auth?.token}),
        onSuccess : () => {
            console.log('workspaces updates successfully');
            
        },
        onError: () => {
            console.log('error updating wprkspace');
            
        }
    });

    return {
        isSuccess, 
        isPending, 
        error, 
        updateWorkpaceMutation
    };
};