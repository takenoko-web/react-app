import styled from "styled-components"

export const StyledComponents = () => {
    return (
        <Container>
            <Title>Styled Components</Title>
            <Button>FIGHT</Button>
        </Container>
    )
}

const Container = styled.div`
    background-color : skyblue;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`

const Title = styled.p`
    background-color : orange;
    padding: 5px;
`

const Button = styled.button`
    background-color : yellow;
    padding : 8px;
    border-radius : 5px;
`