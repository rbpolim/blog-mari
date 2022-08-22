import { format } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR';
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

type PostHeaderProps = {
  title: string
  createdAt: string
}

export function PostHeader({ title, createdAt }: PostHeaderProps) {
  const formattedDate = new Date(createdAt)

  const formattedCreatedAt = format(formattedDate, 'd MMMM Y', {
    locale: ptBR,
  })

  return (
    <header className="flex items-center">
      <Link to="/">
        <ArrowLeft size={48} className="" />
        <ArrowLeft size={48} className="-mt-8 text-orange-200" />
      </Link>

      <div className="flex flex-col ml-10">
        <div className="relative flex items-center">
          <h2 className="text-6xl font-bold">
            {title}
          </h2>

          <div className="absolute bottom-0 -z-10 h-7 w-full bg-orange-200" />
        </div>


        <span className="text-lg mt-2">{formattedCreatedAt}</span>
      </div>
    </header>
  )
}
