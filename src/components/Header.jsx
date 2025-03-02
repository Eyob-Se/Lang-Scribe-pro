import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Lang<span className=' text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400   text-400 bold'>Scribe</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="https://bmc.link/smoljames" target='_blank' className='text-slate-600 cursor-pointer' rel="noreferrer">Donate</a>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-orange-400  '>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
