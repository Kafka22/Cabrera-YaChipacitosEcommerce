import React from 'react'
import { CircleLoader } from 'react-spinners'
const LoaderComponent = () => {
  return (
    <div style={{width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems:"center", }}>
        <CircleLoader color="red"/>
    </div>
 
  )
}

export default LoaderComponent