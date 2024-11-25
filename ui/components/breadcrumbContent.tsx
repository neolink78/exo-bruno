import Logo from "../icons/logo"
import Graphic from "../icons/graphic"
import ButtonArrow from "../icons/buttonArrow"

type BreadCrumbContentTypes = {
    title: string,
    titleColor?: string,
    label?: string, 
    labelColor: string,
    labelBackgroundColor: string,
    children: string,
    childrenColor?: string,
    backgroundColor: string,
    logoColor?: string,
    ownerColor?: string
    button?: string, 
    buttonLink?: string
    buttonColor?: string
    imageBackgroundColor?: string
}

const BreadcrumbContent = ({
    title,
    titleColor = "#F4F8EF",
    label = "MOT CLÉ ASSOCIÉ", 
    labelColor,
    labelBackgroundColor,
    children,
    childrenColor = "#D6E0D3B2",
    backgroundColor,
    logoColor = "#453848",
    ownerColor,
    imageBackgroundColor = "#4538481a",
    button = "Learn more", 
    buttonLink= "/learn-more",
    buttonColor = "#453848",
    }: BreadCrumbContentTypes) => {
    return (
        <div className="breadcrumb_content_container">
        <div className="breadcrumb_content "
        style={{backgroundColor}}>
        <div className="breadcrumb_content_left_side">
        <div className="breadcrumb_content_header" 
        style={{color: titleColor} }>
        <p className="breadcrumb_content_title">{title}</p>
        <div className="breadcrumb_content_labels">
        <p className="breadcrumb_content_label" 
        style={{color: labelColor, backgroundColor: labelBackgroundColor}}>{label}</p>
        <p className="breadcrumb_content_label" 
        style={{color: labelColor, backgroundColor: labelBackgroundColor}}>{label}</p>
        </div>
        </div>
        <div className="breadcrumb_content_description" style={{color: childrenColor}}>{children}</div>
        </div>
        <div className="breadcrumb_content_right_side">
            <div className="breadcrumb_image" style={{backgroundColor: imageBackgroundColor }}>
            <div className="breadcrumb_image_logo">
            <Logo fill={logoColor}/>
            </div>
            <div className="breadcrumb_image_graphic">
        <Graphic ownerColor={ownerColor}/>
        </div>
        </div>
        <a href={buttonLink} className="breadcrumb_image_learn_more" style={{color: buttonColor}}>
        <p>{button}</p>
        <ButtonArrow color={buttonColor}/>
        </a>
    </div>
    </div>
    </div>
    )
}

export default BreadcrumbContent