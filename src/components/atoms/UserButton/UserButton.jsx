import { AvatarImage } from '@radix-ui/react-avatar';
import { LogOutIcon, SettingsIcon, UserCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';


export const UserButton = () => {
    
    const { auth, logout } = useAuth();
    const { toast } = useToast();
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();

        toast({
            title: 'Logged Out Successfully'
        });

        navigate('/auth/signin');
    }

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
                <DropdownMenuItem className='bg-destructive/15 text-destructive' onClick={handleLogout}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    );
};