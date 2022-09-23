// Styles
import { IconSearch } from '@tabler/icons';
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Search = ({}: IProps) => {
  return (
    <div className={styles.base}>
      <IconSearch size={20} className={styles.icon} />
      <div className={styles.placeholder}>What are you looking for?</div>
    </div>
  );
};
