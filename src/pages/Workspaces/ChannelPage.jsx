import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatIput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';
import { useSocket } from '@/hooks/context/useSocket';

export const ChannelPage = () => {
    const { channelId } = useParams();
    const {isFetching, isError, channelDetails} = useGetChannelById( channelId );

    const { joinChannel } = useSocket();

    useEffect(() => {
        if (!isError && !isFetching) {
            joinChannel(channelId);
        }
    },[joinChannel, channelId, isError, isFetching]);

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