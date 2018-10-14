module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    [
      '@babel/proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
