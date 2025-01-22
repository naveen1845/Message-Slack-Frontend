import { Editor } from '@/components/atoms/Editor/Editor';
import { useAuth } from '@/hooks/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useSocket } from '@/hooks/context/useSocket';

export const ChatIput = () => {

    const { socket, currentChannel} = useSocket();

    const { currentWorkspace } = useCurrentWorkspace();

    const {auth} = useAuth();

    function handleSubmit({body}){
        console.log(body);
        socket.emit('NewMessage', {
            body: body,
            senderId: auth?.user?._id,
            channelId: currentChannel,
            workspaceId: currentWorkspace?._id
        }, (data) => {
            console.log('Message sent', data);
        });
    }

    return (
        <div>
            <Editor 
                OnSubmit={handleSubmit}
            />
        </div>
    );
};