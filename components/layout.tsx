import DownArrow from "@/ui/icons/downArrow";
import Brand from "@/ui/icons/brand";
import Button from "@/ui/components/button";
import { useRouter } from "next/router";
import Image from "next/image";
import { footeritems } from "./items/footerItems";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    const router = useRouter()
    return (
        <>
        <div className="layout_navbar">
            <div className="layout_navbar_container">
            <div onClick={() => router.push('/')} style={{cursor: 'pointer'}} ><Brand /></div>
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
            <Button buttonHeight="2.5rem" buttonWidth="12rem" arrowSize="12" buttonFontSize="0.875rem">
                Demander une démo
            </Button>
        </div>
        </div>
        <div className="layout_children">{children}</div>
        <div className="layout_footer">
            <div className="layout_footer_wrapper">
            <div className="layout_footer_top">
                <div>
        <div onClick={() => router.push('/')} style={{cursor: 'pointer'}} ><Brand width="17.19rem" height="1.9rem"/></div>
        <Image style={{marginTop: '4.1rem'}} src='/award.svg' alt="award" width={130} height={98}/>
            </div>
            <div className="layout_footer_links">
            {Object.keys(footeritems).map((columnName, idx) => {
                return (
                <div key={idx} className="layout_footer_column">
                <p className="layout_footer_label">{columnName}</p>
                <div className="layout_footer_links_content" >
                    {footeritems[columnName].map((link, index) => (
                        <a key={index} href={link.url}>{link.label}</a>
                    ))}
                </div>
            </div>
            )})}
            </div>
         </div>
         <div className="layout_footer_footer">
            <p style={{fontSize: '0.75rem', color: '#3C4A41'}}>
                <a href="/terms" style={{textDecoration: 'underline'}}>Terms of Use </a>
                 and  
                 <a href="/policies" style={{textDecoration: 'underline'}}> Privacy Policy</a></p>
            <div className="layout_footer_icons">
            <Image src='/instagram.svg' alt="instagram icon" width={20} height={20}/>
            <Image src='/twitter.svg' alt="twitter icon" width={20} height={20}/>
            <Image src='/youtube.svg' alt="youtube icon" width={20} height={20}/>
            <Image src='/linkedin.svg' alt="linkedin icon" width={20} height={20}/>
            </div>
            <div style={{fontSize: '0.6875rem', color: '#3C4A41'}}>Copyright © 2024. Greenscope. All rights reserved.</div>
         </div>
        </div>
        </div>
        </>
    )
}

export default Layout
