import { Link, useNavigate } from "react-router-dom"

export const Page1B = () => {
    const navigate = useNavigate();
    //1つ前の画面に戻る時はnavigate(-1)
    //2つ前の画面に戻る時はnavigate(-2)
    //1つあとの画面に戻る時はnavigate(+1)
    const onClickBack = () => {
        navigate(-1);
    }
    return(
        <>
            <div>
                <button onClick={onClickBack}>戻る</button>
                <h1>Page1Bのページです</h1>
                <Link to={'/'}>homeはこちら</Link>
                <br />
                <Link to={'/page2'}>page2はこちら</Link>
            </div>
        </>
    )
}