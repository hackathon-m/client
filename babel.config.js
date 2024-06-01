module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // alias 설정
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@type': './src/type', // types는 불가능해서 type으로 대체
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@server': './src/server',
          '@axios': './src/axios',
        },
      },
    ],
  ],
};
