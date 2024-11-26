import Brand from "@/ui/icons/brand";
import Image from "next/image";
import { footerConfig } from "@/config/footerConfig";
import { useRouter } from "next/router";


const Footer = () => {
    const router = useRouter()
    return (
        <div className="layout_footer">
        <div className="layout_footer_wrapper">
        <div className="layout_footer_top">
            <div>
    <div onClick={() => router.push('/')} style={{cursor: 'pointer'}} ><Brand width="17.19rem" height="1.9rem"/></div>
    <Image style={{marginTop: '4.1rem'}} src='/images/award.svg' alt="award" width={130} height={98}/>
        </div>
        <div className="layout_footer_links">
        {Object.keys(footerConfig).map((columnName, idx) => {
            return (
            <div key={idx} className="layout_footer_column">
            <p className="layout_footer_label">{columnName}</p>
            <div className="layout_footer_links_content" >
                {footerConfig[columnName].map((link, index) => (
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
        <Image style={{cursor: 'pointer'}} src='/images/instagram.svg' alt="instagram icon" width={20} height={20}/>
        <Image style={{cursor: 'pointer'}} src='/images/twitter.svg' alt="twitter icon" width={20} height={20}/>
        <Image style={{cursor: 'pointer'}} src='/images/youtube.svg' alt="youtube icon" width={20} height={20}/>
        <Image style={{cursor: 'pointer'}} src='/images/linkedin.svg' alt="linkedin icon" width={20} height={20}/>
        </div>
        <div style={{fontSize: '0.6875rem', color: '#3C4A41'}}>Copyright © 2024. Greenscope. All rights reserved.</div>
     </div>
    </div>
    </div>
    )
}

export default Footer