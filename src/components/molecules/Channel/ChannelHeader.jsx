import { MoreHorizontalIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ChannelHeader = ( { name } ) => {
    return (
        <div className="border-b flex items-center">
            <Dialog >
                <DialogTrigger>
                    <Button
                        className='hover:bg-slate-100 text-lg'
                        variant='ghost'
                    >
                        <span><strong>#</strong>{name}</span>
                        <MoreHorizontalIcon />
                    </Button>
                </DialogTrigger>

                <DialogContent >
                    <DialogHeader >
                        <DialogTitle>
                            # {name}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="rounded-md border p-2">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p >Channel Name:</p> 
                                <p className="text-sm text-muted-foreground">{name}</p>
                            </div>
                            <div>
                                <Button
                                    variant='ghost'
                                >
                                    Edit
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};