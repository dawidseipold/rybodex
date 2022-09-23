// Components
import { Header } from '../../components/layout/Header';
import { Sidebar } from '../../components/layout/Sidebar';

// Styles
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Main = ({ children }: IProps) => {
  return (
    <div className={styles.base}>
      <Sidebar />

      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};
