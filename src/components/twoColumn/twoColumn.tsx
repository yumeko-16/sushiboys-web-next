import { ReactNode, FC } from 'react';
import styles from './twoColumn.module.scss';

type Props = {
  children: ReactNode;
};

const TwoColumn: FC<Props> & {
  Main: FC<Props>;
  Sidebar: FC<Props>;
} = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

TwoColumn.Main = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.verticalSpace}>{children}</div>
    </div>
  );
};
TwoColumn.Main.displayName = 'TwoColumn.Main';

TwoColumn.Sidebar = ({ children }: Props) => {
  return <div className={styles.sidebar}>{children}</div>;
};
TwoColumn.Sidebar.displayName = 'TwoColumn.Sidebar';

export default TwoColumn;
