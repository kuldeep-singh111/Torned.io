import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { useStore } from './store';


function Header() {
    const {user}:any=useKindeBrowserClient();
    const { show, toggleShow } = useStore();
   
  return (
    <>
   
    <div className='flex  ' >
    <span  onClick={toggleShow}> <LayoutGrid className='h-6 w-6 cursor-pointer button'/></span>
    <div className=' flex justify-end items-center w-full gap-2'>
   
        <div className='flex gap-2 items-center border rounded-md p-1 inputbox'>
            <Search className='h-4 w-4 cursor-pointer '/>
            <input type='text' className='outline-none w-52' placeholder='Search after purchase plan ' readOnly/>
        </div>
        <div>
            <Image src={user?.picture} alt='user'
            width={30}
            height={30}
            className='rounded-full'
            />
        </div>
        <Button className='gap-2 flex text-sm
        h-8 hover:bg-blue-700 bg-blue-600
        '> <Send className='h-4 w-4'/> Invite</Button>
    </div>
    </div>
    </>
  )
}

export default Header