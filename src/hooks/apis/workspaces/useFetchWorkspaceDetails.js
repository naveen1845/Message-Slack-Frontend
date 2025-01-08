import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspaceDetails = ( workspaceId ) => {

    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data: workspaceDetails } =  useQuery({
        queryKey: [`fetchWorkspaceById-${workspaceId}`],
        queryFn: () => fetchWorkspaceDetailsRequest({workspaceId : workspaceId, token : auth?.token}),
        staleTime: 30000
    });

    return {
        isFetching, 
        isSuccess,
        error,
        workspaceDetails
    };
};

