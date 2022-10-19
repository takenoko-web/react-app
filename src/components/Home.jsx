import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <div>
                <h1>HOMEのページです</h1>
                <Link to={'/page1'}>page1はこちら</Link>
                <br />
                <Link to={'/page2'}>page2はこちら</Link>
                <Link to={'/query?id=hoge&name=fuga'}>クエリページ</Link>
            </div>
        </>
    )
}