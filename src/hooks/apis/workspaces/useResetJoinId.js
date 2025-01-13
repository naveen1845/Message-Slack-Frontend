import { useMutation } from '@tanstack/react-query';

import { resetJoinIdRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useResetJoinId = (workspaceId) => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: resetJoinIdMutation } = useMutation({
        mutationFn: () => resetJoinIdRequest({ workspaceId, token: auth?.token}),
        onSuccess : () => {
            console.log('Successfully Reseted JoinId');
        },
        onError: (error) => {
            console.log('error Reseted JOinId', error);
        }
    });

    return{
        isPending, 
        isSuccess, 
        error, 
        resetJoinIdMutation
    };
};