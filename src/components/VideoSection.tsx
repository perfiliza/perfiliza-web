interface Props {
  videoUrl?: string | null;
  title?: string;
}

export default function VideoSection({
  videoUrl,
  title = "Em 2 minutos, como a gente trabalha",
}: Props) {
  if (!videoUrl) return null;

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-line bg-ink">
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
