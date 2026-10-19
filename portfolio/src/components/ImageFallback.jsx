import { useState } from 'react';

function ImageFallback({ src, alt, className = '', label = 'Image unavailable' }) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className={`image-fallback ${className}`.trim()} aria-label={label} role="img">
        <span>{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default ImageFallback;
