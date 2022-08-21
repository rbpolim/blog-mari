import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type SliderProps = {
  children: React.ReactNode
}

export function Slider({ children }: SliderProps) {
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <Swiper
        loop
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{
          height: '360px',
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)'
        }}
      >
        {children}
      </Swiper>
    </div>
  )
}
