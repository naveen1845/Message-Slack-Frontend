import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { cn } from '@/lib/utils';
const userItemVariants = cva(
    'flex items-center gap-1.5 justify-start font-normal h-7 py-5 mt-2 text-sm',
    {
        variants: {
            variant: {
                default: 'text-white',
                active: 'text-black bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: 'default'
    }
);
export const UserItem = ({
    id,
    label,
    image,
    username,
    variant =  'default'
}) => {
    console.log('incoming label', label);
    const {currentWorkspace}  = useCurrentWorkspace();
    return (
        <Button
            className={cn(userItemVariants({variant}))}
            variant="transparent"
            size="sm"
            asChild
        >
            <Link to={`/workspace/${currentWorkspace?._id}/members/${id}`}>
                <Avatar>
                    <AvatarImage src={image} className='rounded-md' />
                    <AvatarFallback
                        className='rounded-md bg-sky-500 text-white'
                    >
                        {label.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className='flex gap-1'>
                    <span className='truncate'>
                        {username}
                    </span>
                    { label == 'admin' ? <span className='text-sm truncate text-green-500'>
                        ({label})
                    </span> : <></> }
                </div>
            </Link>
        </Button>
    );
};