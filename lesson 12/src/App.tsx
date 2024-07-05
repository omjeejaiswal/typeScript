import Heading from "./components/Heading"
import {Section} from "./components/Section"
import Counter from "./components/Counter.tsx"
import List from "./components/List.tsx"

import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(1)

  return(
    <>
      <Heading title={"HELLO"} />
      <Section title={"Different Title"}> This is my Section. </Section>
      <Counter setCount = {setCount}> Count is {count} </Counter>
      <List items = {["coffee", "Tacos", "Code", "heloo"]} render = 
          {(item: string) => <span className="gold">{item}</span>}>

      </List>
    </>
  )
  
}

export default App