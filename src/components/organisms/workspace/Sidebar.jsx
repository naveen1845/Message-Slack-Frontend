import { BellIcon, HomeIcon, MessageSquare, MoreHorizontal } from 'lucide-react';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { SidebarButton } from '@/components/molecules/SidebarButton/SidebarButton';

import { WorkspaceSwitcher } from './WorkspaceSwitcher';

export const Sidebar = () => {
    return (
        <aside className="h-full w-[80px] bg-black flex flex-col gap-5 py-3">

            <WorkspaceSwitcher />

            <SidebarButton 
                Icon={HomeIcon}
                label='Home'
            /> 
            <SidebarButton 
                Icon={MessageSquare}
                label='DMs'
            /> 
            <SidebarButton 
                Icon={BellIcon}
                label='Notifications'
            /> 
            <SidebarButton 
                Icon={MoreHorizontal}
                label='More'
            />

            <div className='flex flex-col items-center mt-auto mb-5 gap-y-1'>
                <UserButton />
            </div> 

        </aside>
    );
};