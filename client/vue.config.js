module.exports = {
    css: {
      loaderOptions: {
        css: {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
        },
      }
    }
  }