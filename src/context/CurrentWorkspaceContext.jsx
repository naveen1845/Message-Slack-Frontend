import { createContext, useState } from 'react';

const CurrentWorkspaceContext = createContext();

export const CurrentWorkspaceContextProvider = ( {children} ) => {
    const [ currentWorkspace, setCurrentWorkspace ] = useState();
    return (
        <CurrentWorkspaceContext.Provider value={{ currentWorkspace, setCurrentWorkspace }}>
            {children}
        </CurrentWorkspaceContext.Provider>
    );
};

export default CurrentWorkspaceContext;