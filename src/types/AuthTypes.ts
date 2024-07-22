export type LoginData = {
    email: string;
    password: string;
};

export type RegisterData = {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    password: string;
};

export type AuthContextType = {
    token: string;
    user: any;
    loginAction: (data: LoginData) => Promise<void>;
    logOut: () => void;
};
