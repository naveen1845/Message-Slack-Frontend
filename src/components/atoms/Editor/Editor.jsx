import 'quill/dist/quill.snow.css';

import { ALargeSmallIcon, ImageIcon, SendHorizonalIcon } from 'lucide-react';
import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';


export const Editor = ({
    OnSubmit
}) => {

    const [toolbarVisibility, setToolbarVisibility] = useState(true);

    const containerRef = useRef();
    const quillRef = useRef();
    const defaultValueRef = useRef();
    const placeholderRef = useRef('Type Your message here...');


    function toggleToolbar() {
        setToolbarVisibility(!toolbarVisibility);
        const toolbar = containerRef.current.querySelector('.ql-toolbar');
        if(toolbar) {
            toolbar.classList.toggle('hidden');
        }
    }

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const container = containerRef.current;

        const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));

        const options = {
            theme: 'snow',
            placeholder: placeholderRef.current,
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'image'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean']
                ],
                keyboard: {
                    bindings: {
                        enter: {
                            key: 'Enter',
                            handler: () => {
                                return;
                            }
                        },
                        shift_enter: {
                            key: 'Enter',
                            shiftKey: true,
                            handler: () => {
                                quill.insertText(quill.getSelection()?.index || 0, '\n'); // insert a new line
                            }
                        }
                    }
                }
            }
        };

        const quill = new Quill(editorContainer, options);

        quillRef.current = quill;
        quillRef.current.focus();

        quill.setContents(defaultValueRef.current);
    }, []);

    return (
        <div className="flex flex-col p-3 gap-1">
            <div className="flex flex-col">
                <div ref={containerRef}/>
                <div className="flex px-3 gap-2">
                    <Button
                        className='bg-transparent text-slate-700 p-0.5 hover:text-blue-600 hover:bg-transparent'
                        size='sm'
                        onClick={toggleToolbar}
                    >
                        <ALargeSmallIcon />
                    </Button>
                    <Button
                        className='bg-transparent text-slate-700 p-0.5 hover:text-blue-600 hover:bg-transparent'
                        size='sm'
                        onClick={toggleToolbar}
                    >
                        <ImageIcon />
                    </Button>
                    <Button
                        size='sm'
                        className='ml-auto'
                        onClick={() => {
                            OnSubmit({ body : JSON.stringify(quillRef.current?.getContents())});
                        }}
                    >
                        <SendHorizonalIcon />
                    </Button>
                </div>
            </div>
            <p className="text-xs flex justify-end"><strong>Shift + Enter</strong> &nbsp; to add new line</p>
        </div>
    );
};