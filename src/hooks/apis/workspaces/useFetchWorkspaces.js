import { fetchWorkspacesRequest } from "@/apis/workspaces"
import { useAuth } from "@/hooks/context/useAuth"
import { useQuery } from "@tanstack/react-query"

export const useFetchWorkspaces = () => {

    const { auth } = useAuth()

    const { isFetching, isSuccess, error, data: workspace  } = useQuery({
        queryFn: fetchWorkspacesRequest({token: auth?.token}),
        queryKey: ['fetchWorkspace'],
        staleTime: 30000
    })

    return {
        isFetching,
        isSuccess, 
        error, 
        workspace
    }
}