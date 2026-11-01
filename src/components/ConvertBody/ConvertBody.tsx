import Image from 'next/image';
import parse from 'html-react-parser';
import { Element } from 'domhandler';

type Props = {
  contentHTML: string;
};

export default function ConvertBody({ contentHTML }: Props) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node instanceof Element && node.name === 'img') {
        const { src, alt, width, height } = node.attribs;

        return (
          <Image
            src={src}
            alt={alt}
            width={Number(width)}
            height={Number(height)}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });

  return <>{contentReact}</>;
}
