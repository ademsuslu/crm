import React from 'react'

const Prices = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-mono text-center'>
            Marketing Software That Grows With You
            </h1>
            <span className='text-center font-mono mt-3'>
            Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.
            </span>
        </div>
        <div className='flex flex-col md:flex-row my-4'>
            <div className='flex  border flex-col w-full rounded-lg md:w-1/4'>
                <div className='flex flex-col items-start justify-start p-4'>
                    <h2 className='text-3xl font-mono'>
                      Free
                    </h2>
                    <p className='font-mono text-foreground my-2'>No credit card required</p>
                    <span className='text-center font-mono'>
                    $0/month
                    </span>
                    <ul className='mt-6'>
                        <li>Unlimited contacts</li>
                        <li>Email marketing</li>
                        <li>SMS marketing</li>
                        <li>Calendar and task management</li>
                        <li>Customer support</li>
                    </ul>
                    <button className='rounded font-mono mt-3'>
                        <a href='/sign-in'>Start free</a>
                    </button>
                </div>
                </div>
        

        </div>
    </div>
  )
}

export default Prices