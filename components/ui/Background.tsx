import Image, { StaticImageData } from "next/image";

type BackgroundProps = {
  className?: string | null;
  src: StaticImageData;
  alt: string;
  darkOverlay?: boolean | false;
};

const Background = ({ className, src, alt, darkOverlay }: BackgroundProps) => {
  return (
    <>
      {darkOverlay && (
        <div className="absolute bottom-0 size-full bg-black/50 -z-10" />
      )}
      <Image
        className={`absolute bottom-0 w-full h-unset object-cover -z-20` + (className ? ' ' + className : '')}
        src={src}
        alt={alt}
        priority={true}
      />
    </>
  );
};

export default Background;
