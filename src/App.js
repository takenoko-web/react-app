import { useState } from 'react';
import ChildArea from './components/ChildArea';

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
  return (
    <>
      <input onChange={onChangeText} value={text}/>
      <div className="App">
        <button onClick={onClickIncrement}>インクリメント</button>
        <p>{count}</p>
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open}></ChildArea>
      </div>
    </>
  );
}

export default App;
