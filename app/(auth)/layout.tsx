const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-black-200 h-full">
            {children}
        </div>
    );
}

export default AuthLayout;