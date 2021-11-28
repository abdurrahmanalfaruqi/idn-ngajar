import React from 'react'
import styles from './style.module.css'



function List(props) {
    let data = props.dataList
    let deleteData = props.deleteData
    return (
        <ol >
            {
                data.map(item => {
                    return(
                        <li style={todoItem}>
                            <h6> </h6>
                            <p className={styles.pstyle}> {item.nama}</p>
                            <p className={styles.pstyle2}>{item.kelas}</p>   
                            <button className={styles.remove} idunik={item.idunik} onClick={deleteData}> Hapus</button>
                        </li>
                    )
                })
            }
        </ol>
    )
        }
export default List
const todoItem  = {
    backgroundColor: "rgb(240, 240, 240)",
    width: "500px",
    height: "2rem",
    borderRadius: "5px",
    textColor:"black",
    display:"flex",
    alignItems:"center",
    color:"black",
    margin:"0.5rem",
    border:"none"

}


