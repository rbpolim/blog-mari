import heroImg from '../../assets/hero-image.png'
// import heroImg from '../../assets/chef.svg'

export function HeroSection() {
  return (
    <section className='flex items-center justify-between'>
      <h1 className='text-9xl font-black'>
        Mari Diva
      </h1>

      <img src={heroImg} alt="" className='w-[592px] h-[514px]' />
    </section>
  )
}
