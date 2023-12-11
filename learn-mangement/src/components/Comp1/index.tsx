// import './Comp1.scss'   //全局引入会影响到其他组件

//模块化引入
import styles from './Comp1.module.scss' 

function Comp(){
    return(
        <div className={styles.box}>
            <p>这是comp1中的内容</p>
        </div>
    )
}

export default Comp