import { ReactNode } from "react";

const Main: React.FunctionComponent<{children: ReactNode}> = ({children}) => {
    return (
        <main className="flex flex-col mx-auto max-w-2xl mt-3">
            {children}
        </main>
    );
}
 
export default Main;