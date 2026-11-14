import React from 'react'
import {
	CircleUserRound,
	Bell
} from "lucide-react";

export default function Header () {
  return (
    <header className="p-10 bg-cms-grey rounded-lg">
        <div className='flex justify-between'>
			<div className='font-bold'>
				Miracle Herbal Logo
			</div>
            <div className='flex gap-15'>
				<Bell/>
				<CircleUserRound/>
			</div>
        </div>
    </header>
  )
}

