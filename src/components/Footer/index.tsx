import { InstagramLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="flex justify-between items-center px-32 w-full h-32 bg-zinc-700 text-white">
      <div className="flex items-center">
        <a
          target="_blank"
          href="https://www.instagram.com/marinalemos13/"
        >
          <InstagramLogo size={28} weight="thin" className="-mt-1 hover:text-orange-300 transition-colors" />
        </a>

        <h1 className="uppercase ml-2">
          Todos os direitos reservados © Nina
        </h1>
      </div>

      <span className="uppercase">Code & Design by
        <a
          target="_blank"
          href="https://www.instagram.com/marinalemos13/"
          className="animate-pulse pl-1"
        >
          Polim_
        </a>
      </span>
    </div>
  )
}