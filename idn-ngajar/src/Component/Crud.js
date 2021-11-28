import React, { useState } from 'react'
import Iya from './Submit'
import List from './List'



function Crud () {
    const[data, setData] = useState([])

    function addData(event){
        event.preventDefault()
        let item ={}
        item.idunik = Date.now().toString()
        item.nama = event.target.elements.nama.value
        item.kelas = event.target.elements.kelas.value
        let newData =[...data]
        newData.push(item)
        setData(newData)
    }
    function deleteData(event) {
        event.preventDefault()
        let idunik = event.target.getAttribute("idunik") // ditaruh di button
        let newData = data.filter(item => item.idunik !== idunik)
        setData(newData)
      }

      


    return (
        <div>
            <Iya submitHandler={addData}/>
            <List dataList={data} deleteData={deleteData} />
        </div>
    )
}

export default Crud
