import React from 'react'
import Hero from './_components/hero';
import Navbar from './_components/navbar';
import prisma from '@/lib/prisma'
import {  currentUser,} from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const user = await currentUser()
   
  if(!user){
  redirect("/sign-in")   
  }
  const userId = user.firstName
  const website = await prisma.website.findFirst({
      where: {
          userId: userId
      }
  })
  if(website){
      redirect(`/${website.id}`)
  }

  return (
   <section className=''>
      <div className='flex flex-col w-full h-screen  items-center'>
        <div className='w-full'>
          <Hero />
        </div>
      </div>
   </section>
  )
}

export default HomePage