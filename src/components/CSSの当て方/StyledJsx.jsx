export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">Styled Jsx</p>
                <button className="button">FIGHT</button>
            </div>
            <style jsx="true">{`
                .container {
                    background-color : pink;
                    display: flex;
                    justify-content: space-around;
                    margin-top: 10px;
                }
                .title {
                    background-color : orange;
                    padding: 5px;
                }
                .button {
                    background-color : yellow;
                    padding : 8px;
                    border-radius : 5px;
                }
            `}</style>
        </>
    )
}