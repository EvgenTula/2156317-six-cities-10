import { MAX_IMAGES_COUNT } from '../../const';
import ImageItem from '../image-item/image-item';

type ImageListProps = {
  images: string[],
  type: string
}

export default function ImageList({images, type} : ImageListProps): JSX.Element {
  const imageList = images.slice(0, MAX_IMAGES_COUNT);
  return (
    <div className="property__gallery">
      {imageList.map((src) => (
        <ImageItem
          key={src}
          src={src}
          alt={type}
        />
      ))}
    </div>
  );
}
