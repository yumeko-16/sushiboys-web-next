import { ReactNode } from 'react';
import styles from './container.module.scss';

type Props = {
  children: ReactNode;
  large?: boolean;
};

export default function Container({ children, large }: Props) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
