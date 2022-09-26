import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';

// import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      // entry: pkg.main,
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      strict: false,
      preserveModules: true,
    },
  ],
  plugins: [sass({ insert: true }), typescript(), image(), babel({ babelHelpers: 'bundled' })],
  external: ['react', 'react-dom'],
};
