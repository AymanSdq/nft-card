import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main role='main' className='flex w-full h-screen bg-veryDarkBlueBG flex-col sm:justify-center items-center pt-10 sm:pt-0'>
          
          <div className=' shadow-lg w-[350px] bg-veryDarkBlueCard p-5 rounded-lg flex flex-col gap-4'>
            <img src="/image-equilibrium.jpg" alt="eth image" className=' rounded-lg' />
            <h1 className='text-xl text-colorWhite'>Equilibrium #3429</h1>
            <p className=' font-thin text-softBlue'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='flex justify-between bdrcolor pb-4'>
              <div className=' flex gap-2 items-center '>
                <img className='' src="/icon-ethereum.svg" alt="eth icons" />
                <p className='text-colorCyan font-semibold'>0.041 ETH</p>
              </div>
              <div className=' flex gap-2 items-center'>
                <img className=" w-6" src="/icon-clock.svg" alt="Clock Icons" />
                <p className="text-softBlue text-sm">3 days left</p>
              </div>
            </div>

            <div className='flex gap-2 items-center'>
              <img className='w-8 border-white-2' src="/image-avatar.png" alt="Avatar" />
              <p className=' text-sm text-colorWhite font-light'><span className='text-sm text-softBlue'>Creation of</span> Jules Wyvern</p>
            </div>

          </div>

      </main>
    </>
  )
}

export default App
