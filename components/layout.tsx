import DownArrow from "@/ui/icons/downArrow";
import Brand from "@/ui/icons/brand";
import Button from "@/ui/components/button";
import { useRouter } from "next/router";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    const router = useRouter()
    return (
        <>
        <div className="layout_navbar">
            <div className="layout_navbar_container">
            <div onClick={() => router.push('/')} ><Brand /></div>
            <div className="layout_navbar_redirects">
            <div className="layout_navbar_display">
                Solutions
                <div className="layout_navbar_down_arrow">
                <DownArrow />
                </div>
            </div>
            <div className="layout_navbar_display">
                Platform
                <div className="layout_navbar_down_arrow">
                <DownArrow />
                </div>
            </div>
            <a href="/resources" className="layout_navbar_redirect">Resources</a>
            <a href="/about" className="layout_navbar_redirect">About</a>
            </div>
            <Button buttonHeight="2.5rem" buttonWidth="10.8125rem" arrowSize="12" buttonFontSize="0.875rem">
                Demander une démo
            </Button>
        </div>
        </div>
        <div className="layout_children">{children}</div>
        <div>c est le footer</div>
        </>
    )
}

export default Layout
