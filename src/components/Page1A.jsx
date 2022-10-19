import { Link, useLocation } from "react-router-dom"

export const Page1A = () => {
    /**
     * stateを受け取る側
     * useLocation()で各種情報を取得
     * その中からstateを取得
     */
    const location = useLocation();
    const {arr,object} = location.state
    console.log(arr)
    console.log(object)
    return(
        <>
            <div>
                <h1>Page1Aのページです</h1>
                <Link to={'/'}>homeはこちら</Link>
                <br />
                <Link to={'/page2'}>page2はこちら</Link>
            </div>
        </>
    )
}