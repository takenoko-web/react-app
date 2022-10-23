import { Header } from "../Atoms/layouts/Header";

export const HeaderOnly = (props) => {
    const {children} = props;
    return(
        <>
            <div>
                <Header></Header>
                {children}
            </div>
        </>
    )
}