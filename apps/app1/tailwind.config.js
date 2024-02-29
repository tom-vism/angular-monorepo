const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [sharedTailwindConfig],
  theme: {
    extend: {
      colors: {
        'blue-custom': 'rgb(65,105,225)'
      }
    },
  },
  plugins: [],
};
