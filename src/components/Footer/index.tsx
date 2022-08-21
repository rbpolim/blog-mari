import { InstagramLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex w-full h-24 bg-zinc-700 text-white">
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center">
          <h1 className="uppercase mr-2 font-semibold">
            Todos os direitos reservados © Nina
          </h1>

          <a
            target="_blank"
            href="https://www.instagram.com/marinalemos13"
          >
            <InstagramLogo
              size={28}
              weight="regular"
              className="-mt-1 hover:text-orange-300 transition-colors"
            />
          </a>
        </div>

        <span className="uppercase font-semibold">
          Code & Design by
          <a
            target="_blank"
            href="https://github.com/rbpolim"
            className="animate-pulse pl-1 hover:text-orange-300 transition-colors"
          >
            Polim_
          </a> with ❤️
        </span>
      </div>
    </footer>
  )
}