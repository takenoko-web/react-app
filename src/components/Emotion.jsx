import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion = () => {
    const containerStyle = css`
        background-color : pink;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    `
    const titleStyle = css({
        backgroundColor : 'orange',
        padding: '5px'
    })

    const Button = styled.button`
        background-color : yellow;
        padding : 8px;
        border-radius : 5px;
    `
    return (
        <>
            <div css={css`
                background-color : pink;
                display: flex;
                justify-content: space-around;
                margin-top: 10px;
            `}>
                <p css={titleStyle}>Emotion</p>
                <Button>FIGHT</Button>
            </div>
        </>
    )
}
