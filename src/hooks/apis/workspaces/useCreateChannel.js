import { useMutation } from '@tanstack/react-query';

import { createChannelRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useCreateChannel = (workspaceId) => {

    const {auth} = useAuth();

    const { isPending, isSuccess, error, mutateAsync: createChannelMutation} = useMutation({
        mutationFn: (channelName) => createChannelRequest({workspaceId: workspaceId, channelName : channelName, token: auth?.token}),
        onSuccess : () => {
            console.log('Channel created Successfully');
            
        },
        onError : (error) => {
            console.log('error creating channel', error);
            
        }
    });

    return {
        isPending, 
        isSuccess, 
        error, 
        createChannelMutation
    };
};