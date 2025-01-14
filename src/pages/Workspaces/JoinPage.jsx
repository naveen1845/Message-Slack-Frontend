
import { useNavigate, useParams } from 'react-router-dom';
import VerificationInput from 'react-verification-input';

import { useJoinWorkspace } from '@/hooks/apis/workspaces/useJoinWorkspace';
import { useToast } from '@/hooks/use-toast';

export const JoinPage = () => {

    const { toast } = useToast();

    const navigate = useNavigate();

    const { workspaceId } = useParams();

    const { joinWorkspaceMutation } = useJoinWorkspace(workspaceId);

    async function handleOnComplete(data) {
        try {
            await joinWorkspaceMutation(data);
            toast({
                title: 'Workspace Joined Successfully'
            });
            navigate(`/workspaces/${workspaceId}`);
        } catch (error) {
            console.log(error);
            toast({
                title: error.message
            });
        }
    }
    return(
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className='text-2xl'>Join Workspace</h1>
                <VerificationInput 
                    onComplete={handleOnComplete}
                    length={6}
                    classNames={{
                        container: 'flex gap-x-2',
                        character: 'h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                        characterInactive: 'bg-muted',
                        characterFilled: 'bg-white text-black',
                        characterSelected: 'bg-white text-black',
                    }}
                    autoFocus
                />
            </div>
        </div>
    );
};