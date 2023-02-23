import { ReactNode } from "react";

const Main = ({children}: {children: ReactNode}) => {
    return (
        <main className="flex flex-col mx-auto max-w-2xl mt-3">
            {children}
        </main>
    );
}
 
export default Main;