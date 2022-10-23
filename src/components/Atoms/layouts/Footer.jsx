import styled from "styled-components"

export const Footer = () => {
    return (
        <>
            <SFeader>
                &copy; 2022 test inc
            </SFeader>
        </>
    )
}

const SFeader = styled.footer`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0px;
    width: 100%;
`