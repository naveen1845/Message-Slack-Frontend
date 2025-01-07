import { useQuery } from '@tanstack/react-query';

import { fetchWorkspacesRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspaces = () => {

    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data: workspaces  } = useQuery({
        queryFn: () => fetchWorkspacesRequest({token: auth?.token}),
        queryKey: ['fetchWorkspaces'],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess, 
        error, 
        workspaces
    };
};