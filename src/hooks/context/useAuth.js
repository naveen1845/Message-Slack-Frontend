import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export const isAuth = () => {
    return useContext(AuthContext);
}