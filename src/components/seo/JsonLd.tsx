interface Props {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export default function JsonLd({ data, id }: Props) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
