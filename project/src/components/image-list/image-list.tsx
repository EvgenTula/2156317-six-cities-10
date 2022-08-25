import { useParams } from 'react-router-dom';
import { places } from '../../mocks/offers';

type ImageItemProps = {
  src: string,
  alt: string
}

function ImageItem({ src, alt }: ImageItemProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={alt} />
    </div>
  );
}

export default function ImageList(): JSX.Element {
  const MAX_IMAGES_COUNT = 6;
  const { id } = useParams();
  const place = places.filter((item) => item.id === Number(id))[0];
  const { img, type } = place;
  const photos = img.slice(0, MAX_IMAGES_COUNT);

  return (
    <div className="property__gallery">
      {photos.map((src) => (
        <ImageItem
          key={src}
          src={src}
          alt={type}
        />
      ))}
    </div>
  );
}
