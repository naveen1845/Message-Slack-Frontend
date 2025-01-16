import { useQuery } from '@tanstack/react-query';

import { getChannelByIdRequest } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetChannelById = (id) => {
    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data: channelDetails } =  useQuery({
        queryKey: [`channel-${id}`],
        queryFn: () => getChannelByIdRequest({channelId : id, token : auth?.token}),
        staleTime: 30000
    });

    return {
        isFetching, 
        isSuccess,
        error,
        channelDetails
    };
};