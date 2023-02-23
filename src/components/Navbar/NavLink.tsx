interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink= ({href, children}: NavLinkProps) => {
    return (
        <a href={href} className="p-3 rounded-lg hover:bg-slate-700 hover:underline hover:underline-offset-2">{children}</a>

    );
}
 
export default NavLink;