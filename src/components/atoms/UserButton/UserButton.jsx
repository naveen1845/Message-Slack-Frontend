import { AvatarImage } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/context/useAuth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOutIcon, SettingsIcon, UserCircleIcon } from 'lucide-react';


export const UserButton = () => {
    
    const { auth } = useAuth();

    return (
        <DropdownMenu className='cursor-pointer'>
            <DropdownMenuTrigger className='outline-none'>
                <Avatar className='hover:opacity-70 transition'>
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserCircleIcon/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className='bg-destructive/15 text-destructive'>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    );
};