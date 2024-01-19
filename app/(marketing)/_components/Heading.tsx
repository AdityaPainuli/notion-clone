"use client"
import { Button } from '@/components/ui/button'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    return (
        <div className='max-w-3xl h-full space-y-4'>
            <h1 className='font-bold dark:text-white text-3xl sm:text-5xl md:text-6xl '>Your Ideas, Documents, & Plans. Unified. Welcome to <span className='underline'>Notion</span></h1>
            <h3 className='text-base font-medium sm:text-xl md:text-2xl'>Notion is the connected workspace where
                better, faster work happens.</h3>

            {isAuthenticated ? (<Button>Enter Notion<ArrowRight className='h-4 w-4 ml-2' /></Button>) : (<Button>Try notion for free<ArrowRight className='h-4 w-4 ml-2' /></Button>)}
        </div>
    )
}

export default Heading
