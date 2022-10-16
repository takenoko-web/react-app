export const InlineStyle = () => {
    const containerStyle = {
        backgroundColor : 'pink',
        display: 'flex',
        justifyContent: 'space-around'
    }
    const titleStyle = {
        backgroundColor : 'orange',
        padding: '5px'

    }
    const buttonStyle = {
        backgroundColor : 'yellow',
        padding : '8px',
        borderRadius : '5px'
    }
    return(
        <>
            <div style={containerStyle}>
                <p style={titleStyle}>Inline Style</p>
                <button style={buttonStyle}>FIGHT</button>
            </div>
        </>
    )
}