import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export const ImageWithFallback = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-square',
  objectFit = 'object-cover',
  fallbackIcon: FallbackIcon = ImageOff
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${aspectRatio} ${className}`}>
      {loading && !error && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-2">
          <FallbackIcon className="w-8 h-8 mb-1" />
          <span className="text-[10px] text-center opacity-75 font-medium">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          className={`w-full h-full ${objectFit} transition-all duration-300 ${
            loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
};
