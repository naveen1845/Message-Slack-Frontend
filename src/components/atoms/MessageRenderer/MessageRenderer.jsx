import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';

export const MessageRenderer = ({ value }) => {

    console.log('Value: ', value);
    const rendererRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(false);

    // const sanitizeJSON = (jsonString) => {
    //     return jsonString.replace(/\\n/g, '\\\\n').replace(/\n/g, '\\n');
    // };

    useEffect(() => {
        console.log('Renderer Ref: ', rendererRef.current);
        if(!rendererRef.current) return;

        console.log('Value: ', value);

        const quill = new Quill(document.createElement('div'), {
            theme: 'snow'
        });

        quill.disable();
        // value = sanitizeJSON(value);
        const content = JSON.parse(value);
        quill.setContents(content);
        console.log('Content: ', quill.root.innerHTML);

        const isContentEmpty = quill.getText().trim().length === 0;
        setIsEmpty(isContentEmpty);

        rendererRef.current.innerHTML = quill.root.innerHTML;
    }, [value]);

    if(isEmpty) return null;

    return (
        <div ref={rendererRef} className="ql-editor ql-renderer" />
    );
};