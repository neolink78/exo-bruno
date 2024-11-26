import BreadcrumbContent, { BreadCrumbContentTypes } from "./breadcrumbContent"
import { useState } from "react"

type BreadCrumbProps = {
    items: string[],
    title: string,
    breadCrumbConfig: BreadCrumbContentTypes[]
}

const BreadCrumb = ({items, title, breadCrumbConfig}: BreadCrumbProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0])
    return (
       <>
        <div className="breadcrumb_container">
<div className="breadcrumb_title_container">
    <p className="breadcrumb_title">{title}</p>
    <div className="breadcrumb_layers">
        {items.map((item, idx) => {
            return (
        <p key={idx} className={`breadcrumb_layer ${selectedItem === item ? "active" : '' }`} 
        onClick={() => setSelectedItem(item)}>
            {item}
            </p>
        )})}
    </div>
    </div>
    </div>
    {breadCrumbConfig.map((breadcrumbItem, idx) => (
            breadcrumbItem.title === selectedItem && 
            <BreadcrumbContent 
            key={idx}
            title = {breadcrumbItem.title}
            titleColor = {breadcrumbItem.titleColor}
            labelColor = {breadcrumbItem.labelColor}
            labelBackgroundColor = {breadcrumbItem.labelBackgroundColor}
            childrenColor = {breadcrumbItem.childrenColor}
            backgroundColor = {breadcrumbItem.backgroundColor}
            logoColor = {breadcrumbItem.logoColor}
            ownerColor = {breadcrumbItem.ownerColor}
            buttonColor = {breadcrumbItem.buttonColor}
            imageBackgroundColor = {breadcrumbItem.imageBackgroundColor}
    >{breadcrumbItem.children}
</BreadcrumbContent>
        )
    )}
    </>
    )
}

export default BreadCrumb