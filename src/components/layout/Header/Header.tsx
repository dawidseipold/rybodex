// Components
import { Search } from './Search';

// Icons
import { IconHelp, IconSettings } from '@tabler/icons';

// Styles
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Header = ({}: IProps) => {
  return (
    <header className={styles.base}>
      <Search />

      <div className={styles.iconContainer}>
        <IconHelp className={styles.icon} />
        <IconSettings className={styles.icon} />
      </div>
    </header>
  );
};
