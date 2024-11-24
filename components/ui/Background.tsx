type BackgroundProps = {
  className?: string | null;
  src: string;
  alt: string;
  darkOverlay?: boolean | false;
};

const Background = ({ className, src, alt, darkOverlay }: BackgroundProps) => {
  return (
    <>
      {darkOverlay && (
        <div className="absolute bottom-0 size-full bg-black/50 -z-10" />
      )}
      <img
        className={
          `absolute inset-0 w-screen h-full object-cover -z-20` +
          (className ? " " + className : "")
        }
        src={src}
        alt={alt}
      />
    </>
  );
};

export default Background;
