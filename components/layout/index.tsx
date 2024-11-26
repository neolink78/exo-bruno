import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <>
        <Navbar />
        <div className="layout_children">{children}</div>
        <Footer />
        </>
    )
}

export default Layout
