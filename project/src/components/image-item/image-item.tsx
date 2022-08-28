type ImageItemProps = {
    src: string,
    alt: string
}

export default function ImageItem({ src, alt }: ImageItemProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={alt} />
    </div>
  );
}
