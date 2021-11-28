import React from 'react'
import styles from './style.module.css'




function Iya(props) {
  let addData = props.submitHandler
  
  setTimeout(function(){
    document.getElementById("myForm").reset();},100);

    return (
    <form id="myForm"  onSubmit={addData}>
      <input  className={styles.input}  type="text" name="nama" id="nama" placeholder="Task" />
      <input  className={styles.input2}  type="date" name="kelas" id="kelas"  />
      <button id="myReset"  className={styles.tombol} type="submit" value="submit" text="Button" onClick={Iya}  >submit</button>
    </form>
  )

  

}



export default Iya
