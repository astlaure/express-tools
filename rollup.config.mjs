import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/cjs/main.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/main.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    commonjs(),
  ],
  external: [
    'express',
  ],
};
