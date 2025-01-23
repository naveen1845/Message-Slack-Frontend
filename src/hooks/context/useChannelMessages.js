import { useContext } from 'react';

import ChannelMessagesContext from '@/context/ChannelMessagesContext';

export const useChannelMessages = () => {
    return useContext(ChannelMessagesContext);
};