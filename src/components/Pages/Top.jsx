import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider";
import {SecondaryButton} from "../Atoms/buttons/SecondaryButton";

export const Top = () => {
    const {setUserInfo} = useContext(UserContext)

    const navigate = useNavigate()
    //navigate()の第２引数にオブジェクト形式でstateを渡せる
    const onClickAdmin = () => {
        setUserInfo({isAdmin:true})
        navigate('/users');
    }
    const onClickNormal = () => {
        setUserInfo({isAdmin:false})
        navigate('/users');
    }
    return (
        <>
            <SContainer>
                <h2>トップページです</h2>
                <SecondaryButton onClick={onClickAdmin}>管理ユーザー</SecondaryButton>
                <br />
                <SecondaryButton onClick={onClickNormal}>一般ユーザー</SecondaryButton>
            </SContainer>
        </>
    )
}

const SContainer = styled.div`
    text-align:center;
`