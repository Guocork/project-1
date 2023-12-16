import { add } from '@/store/modules/counter'
import { RootState } from '@/types/store'
import {useSelector,useDispatch} from 'react-redux'

function Page1(){
    const dispatch =useDispatch()
    const {count} =useSelector((state:RootState) => state.counter)
    return(
        <div>
            <p>这是Page1中的内容</p>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch(add())}}>点击修改数据</button>
        </div>
    )
}

export default Page1