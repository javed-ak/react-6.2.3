import { useCallback } from "react"
import { memo } from "react"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() =>{
    console.log("inputFunction Rerender")
  }, [])

  return (
    <>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child Rerender")

  return <>
    <button>Button Clicked</button>
  </>
})

export default App
