import React, { useState } from 'react'

const FormComponent = () => {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const nameHandler = (e)=>{
        // console.log(e, "evento");
        // console.log (e.target, "target")
        setNombre(e.target.value)
    }
    
    const enviarData = (e)=>{
        e.preventDefault()
        const data = {
            name:nombre,
            phone:telefono 
        }
        console.log(data)
        setNombre("")
        setTelefono("")
    }


  return (
    <div>
        <form onSubmit={enviarData}>
            <label className='form-label'>Nombre</label>
            <input className='form-control' name="nombre" type='text' onChange={nameHandler} />
            <p>{nombre} </p>
            <label className='form-label'>Telefono</label>
            <input className='form-control' name="telefono" type='text' onChange={(e)=> setTelefono(e.target.value)} />
            <p>{telefono} </p>
            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
    </div>
  )
}

export default FormComponent