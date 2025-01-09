import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent,DialogDescription,DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspace } from '@/hooks/apis/workspaces/useCreateWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';
import { useQueryClient } from '@tanstack/react-query';

export const CreateWorkspaceModal = () => {

    const [ workspaceName , setWorkspaceName ] = useState('');

    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const { isPending, createWorkspaceMutation } = useCreateWorkspace();

    const queryClient = useQueryClient()

    const navigate = useNavigate();

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({ name: workspaceName });
            console.log('created the workspace: ', data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries('fetchWorkspaces')
            
        } catch (error) {
            console.log('error creating workspace', error);
            
        } finally {
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false);
        }
    }

    function handleClose(){
        setOpenCreateWorkspaceModal(false);
    }

    return (
        <Dialog 
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
            <DialogHeader>
                    <DialogTitle>Create a Workspace</DialogTitle>
                    <DialogDescription>
                        Enter a name for your new workspace.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        required
                        placeholder = 'Enter Workspace Name'
                        minLength = {3}
                        disabled = {isPending}

                        value = {workspaceName}
                        onChange = { (e) => setWorkspaceName(e.target.value)}
                    />

                    <div className='mt-4 flex justify-end'>
                        <Button
                            disabled = {isPending}
                        >
                            CREATE
                        </Button>
                    </div>


                </form>
            </DialogContent>
        </Dialog>
    );
};