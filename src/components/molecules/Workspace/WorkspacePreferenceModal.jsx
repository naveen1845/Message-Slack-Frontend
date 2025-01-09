import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useWorkspacePreferenceModal } from '@/hooks/context/useWorkspacePreferenceModal';
import { useToast } from '@/hooks/use-toast';
import { useUpdateWorkspace } from '@/hooks/apis/workspaces/useUpdateWorkspace';

export const WorkspacePreferenceModal = () => {
    const [workspaceId, setWorkspaceId] = useState(null);
    const [inputValue, setInputValue] = useState(null);
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const { toast } = useToast();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
    const { openPreference, setOpenPreference, workspace } = useWorkspacePreferenceModal();
    const { deleteWorkspaceMutation } = useDeleteWorkspace( workspaceId );
    const { isPending, updateWorkpaceMutation } = useUpdateWorkspace( workspaceId )
    

    useEffect(() => {
        setWorkspaceId(workspace?._id);
        setInputValue(workspace?.name);
    }, [workspace]);
    // we could have useParams here to but since the modal component does not fall under the routes, so it does not have access to the the params. so thats why we choose the context way to do this

    function handleClose(){
        setOpenPreference(false);
    }

    async function handleDeleteWorkspace(e) {
        e.preventDefault();
        try {
            const response = await deleteWorkspaceMutation();
            console.log('workspace deleted successfully onclick', response);
            toast({
                title: 'Workspace Deleted Successfully',
                type: 'success'
            });
            queryClient.invalidateQueries('fetchWorkspaces');
            navigate('/home');
        } catch (error) {
            console.log('error in onclick to delete', error);
            toast({
                title: 'error deleting workspace',
                type: 'error'
            });
        } finally {
            setOpenPreference(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await updateWorkpaceMutation(inputValue)
            console.log('Workspace updated successfully')
            toast({
                title: 'Workspace Updated',
                type: 'success'
            })
            setOpenUpdateModal(false)
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`)
        } catch (error) {
            console.log('error in onclick to update', error);
            toast({
                title: 'error updating workspace',
                type: 'error'
            });
        }finally{
            setOpenUpdateModal(false)
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
                    <Dialog open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
                        <DialogTrigger>
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
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Edit Workspace Name
                                </DialogTitle>
                            </DialogHeader>
                            <form className='space-y-3' onSubmit={handleSubmit}>
                                <Input 
                                    type='text'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    required
                                    autofocus
                                    disabled={isPending}
                                />
                                <div className='flex justify-end gap-2'>
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button
                                                type='button'
                                                variant='outline'
                                                disabled={isPending}
                                            >
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            type='submit'
                                            disabled={isPending}
                                            >
                                            Save
                                        </Button>
                                    </DialogFooter>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
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