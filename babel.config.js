module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './app/assets',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
  exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
