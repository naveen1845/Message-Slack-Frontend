import { TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferenceModal } from '@/hooks/context/useWorkspacePreferenceModal';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';

export const WorkspacePreferenceModal = () => {
    const [workspaceId, setWorkspaceId] = useState(null)
    const { toast } = useToast()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    
    const { openPreference, setOpenPreference, workspace } = useWorkspacePreferenceModal();
    const { deleteWorkspaceMutation } = useDeleteWorkspace( workspaceId )

    useEffect(() => {
        setWorkspaceId(workspace?._id)
    }, [workspace])
    // we could have useParams here to but since the modal component does not fall under the routes, so it does not have access to the the params. so thats why we choose the context way to do this

    function handleClose(){
        setOpenPreference(false);
    }

    async function handleDeleteWorkspace(e) {
        e.preventDefault()
        try {
            const response = await deleteWorkspaceMutation();
            console.log('workspace deleted successfully onclick', response);
            toast({
                title: 'Workspace Deleted Successfully',
                type: 'success'
            })
            queryClient.invalidateQueries('fetchWorkspaces');
            navigate('/home')
        } catch (error) {
            console.log('error in onclick to delete', error);
            toast({
                title: 'error deleting workspace',
                type: 'error'
            })
        } finally {
            setOpenPreference(false);
        }
    }

    return (
        <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Preferences
                    </DialogTitle>
                </DialogHeader>

                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <div
                        className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >   
                            <div className='flex items-center justify-between'>
                                <p
                                    className='font-semibold text-sm'
                                >
                                    Workspace Name
                                </p>
                                <p
                                    className='text-sm font-semibold hover:underline'
                                >
                                    Edit
                                </p>
                            </div>
                    </div>
                    <Button 
                        className='bg-destructive/30 text-destructive hover:bg-destructive/20 border hover:border-destructive'
                        onClick={handleDeleteWorkspace}
                    >
                        <TrashIcon />
                        <p>DELETE WORKSPACE</p>
                    </Button>
                </div>
                
            </DialogContent>

        </Dialog>
    );
};