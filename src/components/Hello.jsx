import React from 'react'

function Hello({firstNAme,lastName,email}) {
  return (
    <>
    <p>First Name:{firstNAme} </p>
    <p>Last Name:{lastName} </p>
    <p>Email:{email} </p>
    <hr/>
    </>
  )
}

export default Hello
