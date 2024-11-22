import DownArrow from "@/lib/icons/downArrow";
import Logo from "@/lib/icons/logo";
type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <>
        <div className="layout_navbar">
           <Logo />
            <div className="layout_navbar_redirects">
            <div className="layout_navbar_redirect">
                Solutions
                <DownArrow />
            </div>
            <div className="layout_navbar_redirect">
                Platform
                <DownArrow />
            </div>
            <div>Resources</div>
            <div>About</div>
            </div>
            <div className="layout_navbar_button">Demander une démo</div>
        </div>
        {children}
        <div>c est le footer</div>
        </>
    )
}

export default Layout
