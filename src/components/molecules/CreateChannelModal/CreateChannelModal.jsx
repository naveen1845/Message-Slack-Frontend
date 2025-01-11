import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useToast } from '@/hooks/use-toast';
import { useCreateChannel } from '@/hooks/apis/workspaces/useCreateChannel';
import { useQueryClient } from '@tanstack/react-query';

export const CreateChannelModal = () => {

    const {toast} = useToast()

    const [ channelName , setChannelName ] = useState('');

    const { openChannelModal, setOpenChannelModal } = useCreateChannelModal();

    const { currentWorkspace } = useCurrentWorkspace()

    const { isPending, createChannelMutation } = useCreateChannel(currentWorkspace?._id)

    const queryClient = useQueryClient()

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            await createChannelMutation(channelName);
            toast({
                title: 'Workspace created Successfully'
            })
            queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`)
            handleClose()
        } catch (error) {
            console.log('error creating channel', error);
            toast({
                title: 'Error creating channel'
            })
        }
    }


    function handleClose(){
        setChannelName('');
        setOpenChannelModal(false);
    }

    return (
        <Dialog open={openChannelModal} onOpenChange={setOpenChannelModal}>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>
                        Create New Channel
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        placeholder='eg. discussion, problem-solving, etc'
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        required
                        minLength={3}
                        disabled={isPending}

                    />

                    <div className="flex justify-end gap-3 mt-4">
                        <Button
                            type='button'
                            variant='outline'
                            onClick={handleClose}
                            disabled={isPending}

                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            disabled={isPending}
                        >
                            Create
                        </Button>
                    </div> 
                </form>
            </DialogContent>
        </Dialog>
    );
};