import { memo } from "react"

//memoで囲むことで、親のstateが更新されても再レンダリングされない
export const ChildArea = memo((props) => {
    console.log('再レンダリング条件：state更新時,props変更時,親が際レンダリングされた時')
    const style = {
        backgroundColor: 'pink',
        width: '90%',
        height: '200px',
    }
    const {open, onClickClose} = props
    return (
        <>
            {open ? 
                <div style={style}>
                    <p>子供</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            :
            null}
        </>
    )
})