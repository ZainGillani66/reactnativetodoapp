module.exports = {
  resolver: {
    assetExts: ['jpg', 'png', 'jpeg', 'ttf', 'otf'],
  },
  transformer: {
    assetPlugins: ['react-native-svg-asset-plugin'],
    enableBabelRCLookup: false,
  },
  serializer: {
    enableExperimentalImportSupport: true,
    enableSegmentSplitting: true,
  },
};
