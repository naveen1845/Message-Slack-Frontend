import { useQuery } from '@tanstack/react-query';

import { getPaginatedMessagesRequest } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetPaginatedMessages = (channelId) => {
    const {auth} = useAuth();
    const { isSuccess, data: messages, error, isFetching} = useQuery({
        queryFn : () => getPaginatedMessagesRequest({ channelId, token: auth?.token}),
        queryKey: ['PaginatedMessages', channelId],
        staleTime: 30000
    });

    return{
        isSuccess, 
        messages, 
        error, 
        isFetching
    };
};