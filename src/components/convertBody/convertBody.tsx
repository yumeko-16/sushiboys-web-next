import parse, { DOMNode, Element } from 'html-react-parser';
import Image from 'next/image';

type Props = {
  contentHTML: string;
};

export default function ConvertBody({ contentHTML }: Props) {
  const contentReact = parse(contentHTML, {
    replace: (node: DOMNode) => {
      if (node.type === 'tag' && (node as Element).name === 'img') {
        const { src, alt, width, height } = node.attribs;

        return (
          <Image
            src={src}
            width={Number(width)}
            height={Number(height)}
            alt={alt ?? ''}
            layout="responsive"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });

  return <>{contentReact}</>;
}
