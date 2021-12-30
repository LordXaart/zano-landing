export default {
  mount: {
    src: '/',
    public: '/',
  },
  plugins: [
    [
      "@snowpack/plugin-postcss"
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};