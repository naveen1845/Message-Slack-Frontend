import { useQueryClient } from '@tanstack/react-query';
import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatIput } from '@/components/molecules/ChatInput/ChatInput';
import { Message } from '@/components/molecules/Message/Message';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';
import { useGetPaginatedMessages } from '@/hooks/apis/channels/useGetPaginatedMessages';
import { useChannelMessages } from '@/hooks/context/useChannelMessages';
import { useSocket } from '@/hooks/context/useSocket';

export const ChannelPage = () => {
    const { channelId } = useParams();
    const {isFetching, isError, channelDetails} = useGetChannelById( channelId );
    const queryClient = useQueryClient();

    const { joinChannel } = useSocket();

    const { messages, isSuccess} = useGetPaginatedMessages(channelId);

    const { setMessageList , messageList } = useChannelMessages();

    useEffect(() => {
        if (!isError && !isFetching) {
            joinChannel(channelId);
        }
    },[joinChannel, channelId, isError, isFetching]);

    useEffect(() => {
        queryClient.invalidateQueries['PaginatedMessages', channelId];
    }, [channelId, queryClient]);


    useEffect(() => {
        if (isSuccess) {
            setMessageList(messages);
        }
    }, [isSuccess, setMessageList, messages, channelId]);



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

        {messageList?.map((message) => {
            return (
                <Message
                    key={message?._id}
                    authorImage={message.senderId?.avatar}
                    authorName={message.senderId?.username}
                    createdAt={message.createdAt}
                    body={message.body}
                />
            );
        })}

            <div className='flex-1' />
            <ChatIput />
        </div>
    );
};