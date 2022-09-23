// Functions
import cn from 'classnames';

// Classes
import { border, background, text } from '../../../styles';

export const borderBottom = cn(border.borderColor, 'border-b');

// ELements
export const base = cn(
  // Size
  'h-screen min-w-[18rem] w-72',

  // Border
  border.borderColor,
  'border-r'
);

export const user = {
  base: cn(
    // Flex
    'flex items-center gap-x-4',

    // Border
    borderBottom,

    // Background
    background.elevationHover,

    // Size
    'p-4 h-20'
  ),

  avatar: cn(
    // Size
    'aspect-square h-8 w-8 rounded',

    // Color
    'bg-blue-700'
  ),

  info: {
    base: cn('flex flex-col'),
    name: cn('text-sm font-bold tracking-wide', text.primary),
    level: cn('text-xs font-semibold tracking-wide', text.dimmed),
  },

  icon: cn('ml-auto fill-light-text-primary dark:fill-dark-text-primary'),
};

export const section = (border: boolean) =>
  cn(
    // Flex
    'flex flex-col gap-y-2 ',

    // Padding
    'p-4',

    // Border
    { [borderBottom]: border }
  );

export const menu = {
  base: cn('flex flex-col gap-y-2'),
  title: cn(
    // Font
    'text-sm font-bold uppercase tracking-wide',

    // Color
    text.dimmed
  ),
  elements: cn('flex flex-col gap-y-1'),
};
