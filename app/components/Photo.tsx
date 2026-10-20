import Image from "next/image";

type PhotoProps = {
  /** Path inside /public, e.g. "/images/team.jpg". Leave empty to show a placeholder. */
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a photo when `src` is provided, otherwise a tinted placeholder
 * with the same proportions so the layout never shifts when images arrive.
 */
export default function Photo({ src, alt, width, height, className, priority }: PhotoProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    );
  }

  return (
    <div
      className={`photo-placeholder ${className ?? ""}`}
      style={{ aspectRatio: `${width} / ${height}` }}
      role="img"
      aria-label={alt}
    />
  );
}
