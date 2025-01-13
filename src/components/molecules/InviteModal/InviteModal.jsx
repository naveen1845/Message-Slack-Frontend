import { useQueryClient } from '@tanstack/react-query';
import { CopyIcon, Loader2, RefreshCcwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetJoinId } from '@/hooks/apis/workspaces/useResetJoinId';
import { useToast } from '@/hooks/use-toast';

export const InviteModal = ({
    workspace,
    openInviteModal,
    setOpenInviteModal
}) => {

    const { resetJoinIdMutation, isPending } = useResetJoinId(workspace?._id);

    const { toast } = useToast();

    const queryClient = useQueryClient();

    async function handleCopy(){
        const invite = workspace?.joinId;
        await navigator.clipboard.writeText(invite);
        toast({
            title: 'Code copied to clipboard',
            type: 'success'
        });
    }

    async function handleReset() {
        try {
            await resetJoinIdMutation();
            toast({
                title: 'Join-Id reset Successfull'
            });
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-xl">{workspace?.name}</span>
                    </DialogTitle>
                    <DialogDescription>
                        Simply copy the code below and send it to your team members!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center items-center gap-3 ">
                    <div className="text-[3rem] font-mono font-semibold">
                        { isPending ? <Loader2 className='animate-spin' /> : <span>{workspace?.joinId}</span> }
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Button
                            onClick={handleCopy}
                            disabled={isPending}
                        >
                            Copy
                            <CopyIcon />
                        </Button>
                        <Button
                            variant='outline'
                            onClick={handleReset}
                            disabled={isPending}
                        >
                            Reset
                            <RefreshCcwIcon />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};