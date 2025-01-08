import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspaceDetails = ( id ) => {

    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data: workspaceDetails } =  useQuery({
        queryKey: [`fetchWorkspaceById-${id}`],
        queryFn: () => fetchWorkspaceDetailsRequest({workspaceId : id, token : auth?.token}),
        staleTime: 30000
    });

    return {
        isFetching, 
        isSuccess,
        error,
        workspaceDetails
    };
};

