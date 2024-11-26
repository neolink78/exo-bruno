import Button from "@/ui/components/button"

type SectionType = {
    leftText: string,
    rightText: string,
    buttonText: string
}

const Section = ({leftText, rightText, buttonText}: SectionType) => {
    return (
<div className="section_container">
    <div className="section_wrapper">
    <div className="section_left_side">
        <p>{leftText}</p>
    </div>
    <div className="section_right_side">
{rightText}
<Button buttonHeight="3.125rem" buttonWidth="12.6875rem">{buttonText}</Button>
    </div>
 </div>
</div>
    )
}

export default Section