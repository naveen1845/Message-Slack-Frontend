import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal"
import { useState } from "react"

export const CreateChannelModal = () => {

    const [ channelName , setChannelName ] = useState('')

    const { openChannelModal, setOpenChannelModal } = useCreateChannelModal();

    async function handleFormSubmit(e){
        e.preventDefault();
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
                    />

                    <div className="flex justify-end gap-3 mt-4">
                        <Button
                            type='button'
                            variant='outline'
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                        >
                            Submit
                        </Button>
                    </div> 
                </form>
            </DialogContent>
        </Dialog>
    )
}