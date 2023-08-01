module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      extraNodeModules: {
        'react-native-config': require.resolve('react-native-config'),
      },
    },
  };
  