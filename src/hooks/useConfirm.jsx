import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"

export const useConfirm = ({
    title,
    message
}) => {

    const [promise, setPromise] = useState(null)

    async function Confirmation(){
        console.log('Confirmation recieved');
        
        return new Promise((resolve) => {
            return setPromise({resolve})
        })
    }

    function handleClose(){
        setPromise(null)
    }

    function handleProceed() {
        promise?.resolve(true)
        handleClose()
    }


    const ConfirmDialog = () => {
        return (
            <Dialog open={promise} onOpenChange={setPromise}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            {message}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            onClick={handleClose}
                            variant='outline'
                        >
                            Close
                        </Button>
                        <Button
                            onClick={handleProceed}
                        >
                            Proceed
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }


    return {
        ConfirmDialog,
        Confirmation
    }
}