"use client"
import Image from 'next/image'
import React, { use } from 'react'
import { Button } from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {

    const {user, isSignedIn} = useUser();

    return (

    <div className='py-3 px-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./pocket..svg'}
        alt='logo'
        width={105}
        height={105}
        />

        {isSignedIn? <UserButton/> : 
        <Link href={'/sign-in'}>
        <Button>
            Sign Up
        </Button>
        </Link>
        }
        
    </div>
  )
}

export default Header