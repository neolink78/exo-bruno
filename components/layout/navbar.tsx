import Button from "@/ui/components/button";
import DownArrow from "@/ui/icons/downArrow";
import { useRouter } from "next/router";
import Brand from "@/ui/icons/brand";

const Navbar = () => {
    const router = useRouter()

    return (
        <div className="layout_navbar">
            <div className="layout_navbar_container">
            <div onClick={() => router.push('/')} style={{cursor: 'pointer'}} >
                <Brand width="13.354rem" height="1.458rem"/>
            </div>
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
    )
}

export default Navbar