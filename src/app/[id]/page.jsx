
'use client'

import React from 'react'
import {useParams} from 'next/navigation'

function page() {
  const params = useParams()
  console.log(params, "THE OPPARAMSSS")
  return (
    <div>page DYNAMIC - ID = {params.id}</div>
  )
}

export default page