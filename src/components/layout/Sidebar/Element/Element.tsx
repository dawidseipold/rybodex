// Styles
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Element = ({ icon, title, active, counter }: IProps) => {
  return (
    <div className={styles.base(active)}>
      <span className={styles.icon(active)}>{icon}</span>
      <span className={styles.title(active)}>{title}</span>
      {counter && <span className={styles.counter}>{counter}</span>}
    </div>
  );
};
