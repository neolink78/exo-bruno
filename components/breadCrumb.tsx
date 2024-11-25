import BreadcrumbContent from "@/ui/components/breadcrumbContent"
import { breadcrumbItems } from "./breadCrumbItems"
import { useState } from "react"


const BreadCrumb = () => {
    const [selectedItem, setSelectedItem] = useState('ESG Data Solution')
    const item1 =  "ESG Data Solution"
    const item2 = "Carbon Assessment"
    const item3 = "CSRD"
    const item4 = "Impact Analysis & Compliance"

    return (
       <>
        <div className="breadcrumb_container">
<div className="breadcrumb_title_container">
    <p className="breadcrumb_title">All your ESG journey needs in one platform</p>
    <div className="breadcrumb_layers">
        <p className={`breadcrumb_layer ${selectedItem === item1 ? "active" : '' }`} 
        onClick={() => setSelectedItem(item1)}>
            {item1}
            </p>
        <p className={`breadcrumb_layer ${selectedItem === item2 ? "active" : '' }`}
        onClick={() => setSelectedItem(item2)}
        >{item2}
        </p>
        <p className={`breadcrumb_layer ${selectedItem === item3 ? "active" : '' }`}
        onClick={() => setSelectedItem(item3)}>
            {item3}
            </p>
        <p className={`breadcrumb_layer ${selectedItem === item4 ? "active" : '' }`}
        onClick={() => setSelectedItem(item4)}>
            {item4}
            </p>
    </div>
    </div>
    </div>
   
    {breadcrumbItems.map((breadcrumbItem, idx) => (
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