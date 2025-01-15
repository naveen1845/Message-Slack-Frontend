import { PlusCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export const WorkspacePanelSection = ({
    children,
    label,
    onIconClick
}) => {

    const [ open, setOpen ] = useState(true);

    return (
        <div className="flex flex-col m-2">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-3">
                    <span className="text-white">
                        {label}
                    </span>
    
                    <Button
                        onClick={() => setOpen(!open)}
                        size='xs'
                        className="bg-black hover:bg-black"
                    >
                        { open ? <FaCaretDown /> : <FaCaretRight /> }
                    </Button>
                </div>
                <Button  
                    size='xs'
                    className='ml-auto hover:scale-110 transition-all bg-black hover:bg-black'
                    onClick={onIconClick}
                >
                    <PlusCircleIcon />
                </Button>
            </div>
            {open && children}
        </div>
    );
};