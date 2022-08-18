import { ForkKnife, Hamburger, Martini, Pizza, Wine } from 'phosphor-react'

import heroImg from '../../assets/girl.svg'

export function HeroSection() {
  return (
    <section className='flex flex-col items-start md:items-center md:flex-row justify-between'>
      <div>
        <h1 className='text-9xl font-black'>
          Nina
        </h1>

        <span className='font-thin text-4xl'>
          EXPERIMENTA!
        </span>

        <div className='flex items-center space-x-2 mt-12'>
          <ForkKnife size={32} weight="regular" className='text-slate-700' />
          <Hamburger size={32} weight="regular" className='text-slate-700' />
          <Pizza size={32} weight="regular" className='text-slate-700' />
          <Wine size={32} weight="regular" className='text-slate-700' />
          <Martini size={32} weight="regular" className='text-slate-700' />
        </div>
      </div>

      <img
        src={heroImg}
        alt="A girl with a fork at the restaurant"
        className='hidden md:flex w-[592px] h-[514px] object-cover'
      />
    </section>
  )
}
