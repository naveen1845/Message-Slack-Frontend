import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { CopyIcon } from "lucide-react"

export const InviteModal = ({
    workspace,
    openInviteModal,
    setOpenInviteModal
}) => {

    const { toast } = useToast();

    async function handleCopy(){
        const invite = workspace?.joinId;
        await navigator.clipboard.writeText(invite)
        toast({
            title: 'Code copied to clipboard',
            type: 'success'
        })
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
                    <div className="text-[3rem] font-semibold">
                        <span>{workspace?.joinId}</span>
                    </div>
                    <div>
                        <Button
                            onClick={handleCopy}
                        >
                            Copy
                            <CopyIcon />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}