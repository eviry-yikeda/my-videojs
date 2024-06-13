const config = {
  // 自作プレイリストのエントリーポイント
  // entry: "./src/playerWith2layerPlaylist/index.js",
  // 外部プラグインプレイリストのエントリーポイント
  entry: "./src/playerWithPlaylist/index.js",

  output: {
    filename: "player.js",
    library: "MyPlayer",
    libraryTarget: "global",
    libraryExport: "MyPlayer",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          {
            loader: "css-loader",
            options: { url: true },
          },
        ],
      },
    ],
  },
};

export default config;
