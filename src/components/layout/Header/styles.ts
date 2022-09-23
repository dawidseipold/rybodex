// Functions
import cn from 'classnames';

// Classes
import { border, text } from '../../../styles';

// Elements
export const base = cn(
  // Flex
  'flex items-center justify-between',

  // Size
  'h-20 w-full px-4',

  // Border
  'border-b',
  border.borderColor
);

export const iconContainer = cn('flex items-center gap-x-4');

export const icon = cn(text.dimmed);
