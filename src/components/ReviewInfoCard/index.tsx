type ReviewInfoCardProps = {
  title: string
  children: React.ReactNode
}

export function ReviewInfoCard({ title, children }: ReviewInfoCardProps) {
  return (
    <section className="px-6 py-3 rounded border border-zinc-600 shadow-md">
      <h2 className="font-semibold text-zinc-900 mb-2">
        {title}
      </h2>

      {children}
    </section>
  )
}
