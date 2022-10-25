import { createContext, useState } from "react";
//グローバルなstate管理
export const UserContext = createContext({})
/**
 * プロバイダーの中にグローバルで管理するstateを入れていくイメージ
 * プロバイダーは要素を囲ってそれの配下で、グローバルなstateを使用できるようになる
 * 
 * useContextでグローバルなstateを使えるようになる
 * グローバルなstateが変更されたら、使用しているコンポーネント全てが再レンダリングされる
 * また、再レンダリング条件により親コンポーネント際レンダリングによる子の再レンダリングされる
 * そのため、子コンポーネントはメモ化しておく
 * 
 */
export const UserProvider = (props) => {
    const [userInfo, setUserInfo] = useState(null)
    const {children} = props
    return (
        <>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
                {children}
            </UserContext.Provider>
        </>
    )
}