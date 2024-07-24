export type LoginData = {
    email: string;
    password: string;
};

export type RegisterData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
};

export type AuthContextType = {
    token: string;
    user: any;
    loginAction: (data: LoginData) => Promise<void>;
    logOut: () => void;
};
