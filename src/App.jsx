import CounterButton from "./components/counterButton"
import Counter from "./components/counter"
import { useState } from "react"

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <>
      <div id="main">
          <Counter count={count}/>
          <CounterButton setCount={setCount} count={count}/>
      </div>
    </>
  )
}

export default App
