import Logo from '@/components/logo/logo';
import styles from './hero.module.scss';

type Props = {
  heading?: string;
};

export default function Hero({ heading }: Props) {
  return (
    <div>
      <h1 aria-label="SUSHIBOYS">
        <Logo />
      </h1>

      {heading && (
        <div>
          <h2>{heading}</h2>
        </div>
      )}
    </div>
  );
}
