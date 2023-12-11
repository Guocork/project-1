// import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"
import { Button } from 'antd';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      顶级组件nnn
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type="primary">Primary Button</Button>
    </>
  )
}

export default App
