import { Link, useNavigate } from "react-router-dom"

export const Page1 = () => {
    /**
     * ページ遷移の情報の受け渡し
     * stateにオブジェクトで渡したいstateを渡していく
     */ 
    const arr = [...Array(100).keys()];
    /**
     * 
     */
    const navigate = useNavigate();
    const onClickB = () => {
        navigate('/page1/B');
    };
    return(
        <>
            <div>
                <h1>Page1のページです</h1>
                <Link to={'/page1/A'} state={
                    {
                        arr:arr, 
                        object: 'object'
                    }
                }>A</Link>
                <br />
                <Link to={'/page1/B'}>B</Link>
                <br />
                <button onClick={onClickB}>Bへ遷移</button>
                <br />

                <Link to={'/'}>homeはこちら</Link>
                <br />
                <Link to={'/page2'}>page2はこちら</Link>
            </div>
        </>
    )
}