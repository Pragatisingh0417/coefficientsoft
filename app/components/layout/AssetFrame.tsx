"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import type { SiteImage } from "../../data/site-images";

type AssetFrameProps = {
  asset: SiteImage;
  className: string;
  fallback: ReactNode;
  sizes: string;
};

export default function AssetFrame({
  asset,
  className,
  fallback,
  sizes,
}: AssetFrameProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);

  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      {asset.src && failedSource !== asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setFailedSource(asset.src)}
        />
      ) : (
        fallback
      )}
    </div>
  );
}
