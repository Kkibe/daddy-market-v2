import { useState } from 'react';

const PLACEHOLDER_URL =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

export default function ProductImage({ src, alt, className, style }) {
  const [imgSrc, setImgSrc] = useState(src || PLACEHOLDER_URL);
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc(PLACEHOLDER_URL);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || 'Product image'}
      className={className}
      style={style}
      loading="lazy"
      onError={handleError}
    />
  );
}
