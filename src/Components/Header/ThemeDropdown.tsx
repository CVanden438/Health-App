import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './ThemeDropdown.module.css';
import useTheme, { Themes } from '../../Hooks/useTheme';
const ThemeDropdown = () => {
  const { setTheme } = useTheme();
  const handleSetTheme = (theme: Themes) => {
    setTheme(theme);
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
      <DropdownMenu.Portal className={styles.dropdown}>
        <DropdownMenu.Content className={styles.menu}>
          <DropdownMenu.RadioGroup
            onValueChange={(e) => handleSetTheme(e as Themes)}
          >
            <DropdownMenu.RadioItem
              className={styles.menu_item}
              value='automatic'
            >
              Automatic
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={styles.menu_item} value='light'>
              Light
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={styles.menu_item} value='dark'>
              Dark
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeDropdown;
