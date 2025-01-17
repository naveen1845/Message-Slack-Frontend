import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatIput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';

export const ChannelPage = () => {
    const { channelId } = useParams();
    const {isFetching, isError, channelDetails} = useGetChannelById( channelId );

    if (isFetching) {
        return(
            <div className='h-full w-full flex justify-center items-center'>
                <Loader2Icon className='animate-spin' />
            </div>
        );
    }

    if (isError) {
        return (
           <div className='h-full w-full flex flex-col gap-2 justify-center items-center text-destructive'>
            <TriangleAlertIcon /> 
            <span>Error Fetching Channel Details</span>
            </div>
        );
    }

    return (
        <div className='h-full flex flex-col'>
            <ChannelHeader 
                name={channelDetails?.name}
            />
            <div className='flex-1' />
            <ChatIput />
        </div>
    );
};