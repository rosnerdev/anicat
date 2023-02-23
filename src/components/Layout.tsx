import { ReactNode } from "react";
import Nav from "./Navbar/Nav";
import Main from "./Main";

 const Layout = ({children}: {children: ReactNode}) => {
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