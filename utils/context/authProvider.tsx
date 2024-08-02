import {createContext, PropsWithChildren, ReactNode, useContext} from "react";
import {useStorage} from "@/utils/hooks/useStorage";

export const AuthContext = createContext<{
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    jwtToken: () => Promise<string | null>;
    isAuthenticated: () => Promise<boolean>;
}>({
    signIn: async (email: string, password: string) => {},
    signOut: async () => {},
    jwtToken: async () => null,
    isAuthenticated: async () => true,
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [[isLoading, authToken], setState] = useStorage('auth');

    return (
        <AuthContext.Provider
            value={{
                signIn: async (email: string, password: string) => {
                    setState('Authenticated');
                },
                signOut: async () => {
                    setState(null);
                },
                jwtToken: async () => {
                    return authToken;
                },
                isAuthenticated: async () => {
                    return !!authToken;
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}