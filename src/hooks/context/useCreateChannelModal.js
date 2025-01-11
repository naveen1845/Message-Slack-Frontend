import { useContext } from 'react';

import CreateChannelModalContext from '@/context/CreateChannelModalContext';

export const useCreateChannelModal = () => {
    return useContext(CreateChannelModalContext);
};