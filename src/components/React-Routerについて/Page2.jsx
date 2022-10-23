import { Link } from "react-router-dom"

export const Page2 = () => {
    return(
        <>
            <div>
                <h1>Page2のページです</h1>
                <Link to={'/'}>homeはこちら</Link>
                <br />
                <Link to={'/page1'}>page1はこちら</Link>
            </div>
        </>
    )
}