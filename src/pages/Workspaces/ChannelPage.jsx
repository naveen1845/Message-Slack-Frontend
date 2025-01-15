import { useParams } from 'react-router-dom';

export const ChannelPage = () => {
    const { channelId } = useParams();
    return (
        <p>Channel {channelId}</p>
    );
};