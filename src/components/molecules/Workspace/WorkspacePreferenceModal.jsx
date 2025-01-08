import { TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferenceModal } from '@/hooks/context/useWorkspacePreferenceModal';

export const WorkspacePreferenceModal = () => {
    
    const { openPreference, setOpenPreference } = useWorkspacePreferenceModal()
    
    function handleClose(){
        setOpenPreference(false)
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
                    <Button className='bg-destructive/30 text-destructive hover:bg-destructive/20 border hover:border-destructive '>
                        <TrashIcon />
                        <p>DELETE WORKSPACE</p>
                    </Button>
                </div>
                
            </DialogContent>

        </Dialog>
    );
};