import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { ReactSnowfall } from './ReactSnowfall';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ReactSnowfall',
  component: ReactSnowfall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReactSnowfall>;



export function Primary() {
  return <ReactSnowfall />;
}
