import React from 'react'
import { Link } from 'react-router-dom'

export const Cardscontent = () => {
  return (
    <div>
        <div>
            this is card content
        </div>
       
        <button >
        <Link to ='/'>
            Back to menu
        </Link>
        </button>
    </div>
    
  )
}
