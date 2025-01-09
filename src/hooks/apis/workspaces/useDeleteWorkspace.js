import { deleteWorkspaceRequest } from "@/apis/workspaces"
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query"

export const useDeleteWorkspace = (workspaceId) => {
    const { auth }  = useAuth()
    
    const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutation} = useMutation({
        mutationFn: () => deleteWorkspaceRequest({workspaceId: workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('workspace deleted successfully')
        },
        onError: () => {
            console.log('error deleting workspace')
        }
        
        
    })

    return {
        isPending, 
        isSuccess, 
        error, 
        deleteWorkspaceMutation
    }
        
    
}