import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex fixed bottom-0 items-center w-full h-min p-6 bg-background z-50 dark:bg-[#1F1F1F]'>
            <h1 className="capitalize font-bold text-xl">Notion</h1>
            <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    )
}

export default Footer
