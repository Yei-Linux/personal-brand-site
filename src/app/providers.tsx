'use client';

import { NextUIProvider } from '@nextui-org/react';
import { IconContext } from 'react-icons';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider
      value={{ color: '#848aff', className: 'global-class-name' }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </IconContext.Provider>
  );
}
