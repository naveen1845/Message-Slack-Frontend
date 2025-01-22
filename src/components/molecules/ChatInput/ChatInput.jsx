import { Editor } from '@/components/atoms/Editor/Editor';

export const ChatIput = () => {

    function handleSubmit({body}){
        console.log(body);
    }

    return (
        <div>
            <Editor 
                OnSubmit={handleSubmit}
            />
        </div>
    );
};