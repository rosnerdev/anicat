import { ReactNode } from "react";
import Nav from "./Navbar/Nav";
import Main from "./Main";

 const Layout: React.FunctionComponent<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <Nav/>
            <Main>
                {children}
            </Main>
        </>
    );
}
 
export default Layout;