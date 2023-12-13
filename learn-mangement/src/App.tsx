// import { useState } from 'react'
// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"
// import { Button } from 'antd';
import { useRoutes } from "react-router-dom";
import Router from '@/router/index.tsx'

function App() {
  // const [count, setCount] = useState(0)
  const outlet=useRoutes(Router)
  return (
    <>
      {/* <Comp1></Comp1>
      <Comp2></Comp2> */}
      {/* <Button type="primary">Primary Button</Button> */}
      {/* <Link to='/Home'>Home</Link> */}
      {/* <Link to='/About'>About</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </>
  )
}

export default App
