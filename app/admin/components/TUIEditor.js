'use client'

import { Editor } from '@toast-ui/react-editor'
import { ToastContainer, toast } from 'react-toastify';
import '@toast-ui/editor/dist/toastui-editor.css';
import "react-toastify/dist/ReactToastify.css";
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

export default function TUIEditor() {
    // const editorRef = useRef(null)
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]

    return (
        <Editor
            // ref={editorRef}
            initialValue=''
            placeholder='글을 작성해주세요!'
            initialEditType='markdown'
            previewStyle="tab"
            height='600px'
            theme={''}
        />
    )
}