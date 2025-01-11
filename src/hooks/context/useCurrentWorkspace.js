import CurrentWorkspaceContext from "@/context/CurrentWorkspaceContext"
import { useContext } from "react"

export const useCurrentWorkspace = () => {
    return useContext(CurrentWorkspaceContext)
}