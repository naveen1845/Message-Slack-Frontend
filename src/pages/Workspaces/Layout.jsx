import { Navbar } from '@/components/organisms/workspace/Navbar';
import { Sidebar } from '@/components/organisms/workspace/Sidebar';
import { WorkspacePanel } from '@/components/organisms/workspace/WorkspacePanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
                <Navbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId='workspace-resize'>
                    <ResizablePanel 
                        defaultSize={20}
                        minSize={10}
                        className='bg-stone-900'
                    >
                        <WorkspacePanel/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel
                        minSize={70}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
};