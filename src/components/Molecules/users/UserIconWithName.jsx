import { memo, useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../../providers/UserProvider"
import { SecondaryButton } from "../../Atoms/buttons/SecondaryButton"

export const UserIconWithName = memo((props) => {
    const {image, name} = props
    //useContext()で引数に使用するプロバイダーを指定することで、そこで定義したグローバルなstateを使用できるようになる
    const {userInfo} = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin:false;
    return (
        <>
            <SContainer>
                <img alt="プロフィール" height={160} width={160} src={image}/>
                <p>{name}</p>
                { isAdmin &&
                <SecondaryButton>編集</SecondaryButton>
                }
            </SContainer>
        </>
    )
})

const SContainer = styled.div`
    text-align:center;
    img {
        border-radius: 50%;
    }
    p {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        color: #40514e;
    }
`