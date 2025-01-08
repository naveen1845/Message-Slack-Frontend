import { Navbar } from "@/components/organisms/workspace/Navbar";
import { Sidebar } from "@/components/organisms/workspace/Sidebar";

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
                <Navbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};