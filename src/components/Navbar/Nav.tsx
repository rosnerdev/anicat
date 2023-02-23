import NavLink from "./NavLink";

const NavLinks = ["Home", "Top 10", "Search"];

const Nav: React.FunctionComponent = () => {
    return (
        <nav className="bg-slate-900 text-white p-6 flex items-center space-x-4">
            <h2 className="text-3xl font-semibold">AniCat</h2>
            <div className="space-x-2">
                {NavLinks.map((link) => (
                    <NavLink key={link} href={`/${link.toLowerCase().replace(" ", "")}`}>{link}</NavLink>
                ))}
            </div>
        </nav>
    );
}
 
export default Nav;