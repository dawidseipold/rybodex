// Icon
import { IconCaretDown, IconHome, IconSmartHome } from '@tabler/icons';
import { Element } from './Element';

// Styles
import * as styles from './styles';

// Types
import { IProps } from './types';

export const Sidebar = ({}: IProps) => {
  return (
    <aside className={styles.base}>
      <section className={styles.user.base}>
        <span className={styles.user.avatar} />

        <div className={styles.user.info.base}>
          <h3 className={styles.user.info.name}>John Doe</h3>
          <span className={styles.user.info.level}>Level 63</span>
        </div>

        <IconCaretDown size={20} className={styles.user.icon} />
      </section>

      <section className={styles.section(true)}>
        <div className={styles.menu.base}>
          <span className={styles.menu.title}>Menu</span>
          <div className={styles.menu.elements}>
            <Element active={true} icon={<IconSmartHome />} title="My catch" />
            <Element active={false} icon={<IconSmartHome />} title="Statistics" counter={2} />
            <Element active={false} icon={<IconSmartHome />} title="Feed" />
          </div>
        </div>
      </section>

      <section className={styles.section(false)}>
        <div className={styles.menu.base}>
          <span className={styles.menu.title}>Library</span>

          <div className={styles.menu.elements}>
            <Element active={false} icon={<IconSmartHome />} title="Fishes" />
            <Element active={false} icon={<IconSmartHome />} title="Fishing Spots" />
            <Element active={false} icon={<IconSmartHome />} title="Methods" />
          </div>
        </div>
      </section>
    </aside>
  );
};
