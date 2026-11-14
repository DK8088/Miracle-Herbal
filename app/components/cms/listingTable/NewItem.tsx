import React from 'react'
import Link from "next/link"

export default function NewItem (
  {type}: {
    type : string
  }
) {
  return (
    <Link href={type ? `/admin/${type}/new/` : ''} className="px-5 py-3 rounded-lg bg-cms-green text-white font-medium w-max">Add New Item</Link>
  )
}

