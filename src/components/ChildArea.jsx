function ChildArea(props) {
    console.log('再レンダリング条件：state更新時,props変更時,親が際レンダリングされた時')
    const style = {
        backgroundColor: 'pink',
        width: '90%',
        height: '200px',
    }
    const {open} = props
    return (
        <>
            {open ? 
                <div style={style}>
                    <p>子供</p>
                </div>
            :
            null}
        </>
    )
}

export default ChildArea