'use client'
import {useSession} from 'next-auth/react'

export default function Profile() {
  const session =  useSession()
  
  return (
    <>
      <div>Profile</div>
      {session.data?.user ? <div>Sign in</div>: <div>Sign Out</div>}
    </>
  )
}
