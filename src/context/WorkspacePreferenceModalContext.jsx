import { createContext, useState } from 'react';

const WorkspacePreferenceModalContext = createContext();


export const WorkspacePreferenceModalContextProvider = ({children}) => {
    const [ openPreference, setOpenPreference ]  = useState(false);
    const [ workspace, setWorkspace ] = useState(null);
    return (
        <WorkspacePreferenceModalContext.Provider value={{openPreference, setOpenPreference, workspace, setWorkspace}}>
            {children}
        </WorkspacePreferenceModalContext.Provider>
    );
};

export default WorkspacePreferenceModalContext;