import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'docs/main.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js',
    },
    plugins: [
      svelte({
        compilerOptions: {
          dev: !production,
          css: (css) => {
            css.write('public/build/bundle.css');
          },
        }, 
        emitCss: false,
      }),
      nodeResolve({
        browser: true,
        exportConditions: ['svelte'],
      }),
      commonjs(),
      !production && serve(),
      !production && livereload('public'),
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/Avatar.svelte',
    output: { file: pkg.main, format: 'umd', name: 'Avatar' },
    plugins: [svelte({ emitCss: false }), nodeResolve({ exportConditions: ['svelte'] }), commonjs()],
  },
  {
    input: 'src/Avatar.svelte',
    output: { file: pkg.module, format: 'es' },
    external: (id) => id.startsWith('svelte'),
    plugins: [svelte({ emitCss: false }), nodeResolve({ exportConditions: ['svelte'] }), commonjs()],
  },
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}
