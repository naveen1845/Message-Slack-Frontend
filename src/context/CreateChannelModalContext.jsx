import { createContext, useState } from "react";

const CreateChannelModalContext = createContext();

export const CreateChannelModalContextProvider = ({children}) => {

    const [ openChannelModal, setOpenChannelModal ] = useState(false)

    return (
        <CreateChannelModalContext.Provider value={ {openChannelModal, setOpenChannelModal} }>
            {children}
        </CreateChannelModalContext.Provider>
    )
}

export default CreateChannelModalContext;
