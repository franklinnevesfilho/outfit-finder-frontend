import {useContext} from "react";
import {AuthContext} from "@/utils/context/authProvider";

export function useAuth(){
    const value = useContext(AuthContext);
    if(!value){
        throw new Error('useAuth must be wrapped in a <AuthProvider/>');
    }
}