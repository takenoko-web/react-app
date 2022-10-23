import { Footer } from "../Atoms/layouts/Footer";
import { Header } from "../Atoms/layouts/Header";

export const DefaultLayout = (props) => {
    const {children} = props;
    return(
        <>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}