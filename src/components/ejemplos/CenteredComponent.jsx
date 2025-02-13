import React from 'react'

const CenteredComponent = ({children}) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
        {children}
    </div>
  )
}

export default CenteredComponent