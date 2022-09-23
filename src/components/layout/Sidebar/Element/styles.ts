import cn from 'classnames';

// Classes
import { text, background } from '../../../../styles';

// Elements
export const base = (active: boolean) =>
  cn(background.elevationHover, 'flex gap-x-2 rounded-xl p-2', { [background.elevation]: active });

export const icon = (active: boolean) => cn(text.dimmed, { [text.primary]: active });

export const title = (active: boolean) =>
  cn('font-medium', text.dimmed, { [text.primary]: active });

export const counter = cn(
  'ml-auto rounded-lg bg-red-500',

  // Flex
  'flex items-center justify-center',

  // Font
  'text-sm font-semibold',

  // Size
  'aspect-square h-6 w-6 p-1'
);
