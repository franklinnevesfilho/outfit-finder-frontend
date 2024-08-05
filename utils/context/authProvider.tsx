import {createContext, PropsWithChildren} from "react";
import {useStorage} from "@/utils/hooks/useStorage";

export const AuthContext = createContext<{
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    token: () => Promise<string | null>;
}>({
    signIn: async (email: string, password: string) => {},
    signOut: async () => {},
    token: async () => null,
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [[isLoading, authToken], setToken] = useStorage('auth');

    return (
        <AuthContext.Provider
            value={{
                signIn: async (email: string, password: string) => {
                    setToken('AuthToken');
                },
                signOut: async () => {
                    setToken(null);
                },
                token: async () => {
                    return authToken;
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}