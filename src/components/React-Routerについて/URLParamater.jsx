import { useParams } from "react-router-dom"

export const UrlParamater = () => {
    /**
     * useParams()でパラメータ部分を取得
     * Router定義で/:paramaterとなっているのがuseParamsのなかに入る
     */
    const { paramater } = useParams();
    return(
        <>
            <p>urlパラメータ</p>
            <p>パラメータ {paramater}</p>
        </>
    )
}