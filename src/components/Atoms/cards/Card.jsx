import styled from "styled-components";

export const Card = (props) => {
    const {children} = props;
    return(
        <>
            <SDiv>
                {children}
            </SDiv>
        </>
    );
};

const SDiv = styled.div`
    background-color: #ffffff;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding:16px;
`