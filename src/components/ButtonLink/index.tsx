import styles from './index.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
