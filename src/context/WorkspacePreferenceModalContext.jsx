import { createContext, useState } from 'react';

const WorkspacePreferenceModalContext = createContext();


export const WorkspacePreferenceModalContextProvider = ({children}) => {
    const [ openPreference, setOpenPreference ]  = useState(false);
    return (
        <WorkspacePreferenceModalContext.Provider value={{openPreference, setOpenPreference}}>
            {children}
        </WorkspacePreferenceModalContext.Provider>
    );
};

export default WorkspacePreferenceModalContext;