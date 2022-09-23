// Functions
import cn from 'classnames';
import { background, text } from '../../../../styles';

// Classes

// Elements
export const base = cn(
  'rounded-xl cursor-pointer',

  // Flex
  'flex items-center',

  // Size
  'w-max px-4',

  // Background
  background.elevationHover
);

export const icon = cn('cursor-pointer', text.dimmed);

export const placeholder = cn('w-full bg-transparent px-4 py-2 font-semibold', text.dimmed);
