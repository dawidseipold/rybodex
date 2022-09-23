// Components
import { Sidebar } from '../../components/layout/Sidebar';

// Styles
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Main = ({ children }: IProps) => {
  return (
    <div className={styles.base}>
      <Sidebar />

      {children}
    </div>
  );
};
