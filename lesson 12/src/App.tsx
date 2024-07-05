import Heading from "./components/Heading"
import {Section} from "./components/Section"
import Counter from "./components/Counter.tsx"

import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(1)

  return(
    <>
      <Heading title={"HELLO"} />
      <Section title={"Different Title"}> This is my Section. </Section>
      <Counter setCount = {setCount}> Count is {count} </Counter>
    </>
  )
  
}

export default App