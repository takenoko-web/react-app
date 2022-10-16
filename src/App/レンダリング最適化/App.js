import { useCallback, useMemo, useState } from 'react';
import { ChildArea } from './components/ChildArea';

function App() {
  console.log('大人')
  const [count, setCount] = useState(0)
  const onClickIncrement = () => {
    setCount(count + 1)
  }
  const [text, setText] = useState('')
  const onChangeText = (e) => {
    setText(e.target.value)
  }
  const [open, setOpen] = useState(false)
  const onClickOpen = () => {
    setOpen(!open)
  }
  /*　useCallbackを使用しないと、関係ないstateが変更されても、
      コンポーネントが変更されるため、新しく関数が作成される
      新しく作成された場合、子はpropsが変更されたとして、再レンダリングされる
      そこでuseCallbackを使用し、第２引数に監視する要素だけ渡すことで
      再レンダリングを防ぐことができる
  */
  const onClickClose = useCallback(() => {
    setOpen(false)
  },[setOpen])

  //変数自体のメモ化　再レンダリングされても変数を改めて定義せず使い回す
  const temp = useMemo(() => 1+3, [])
  console.log(temp)
  return (
    <>
      <input onChange={onChangeText} value={text}/>
      <div className="App">
        <button onClick={onClickIncrement}>インクリメント</button>
        <p>{count}</p>
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
      </div>
    </>
  );
}

export default App;
