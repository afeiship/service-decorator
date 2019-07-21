# service-decorator
> A decorator for inject service to your context.

## usage
```js
// ... 
module: {
  rules: [
    {
      test: /\.(js)$/,
      use: ['babel-loader'],
      include: [
        resolve(__dirname, 'test'), 
        // poinit1:
        resolve(__dirname, './index')
      ]
    }
  ]
},
resolve: {
  alias: {
    // poinit2:
    services: resolve(__dirname, 'test/services')
  }
},
plugins: [
  new HtmlWebpackPlugin(),
  new webpack.ProvidePlugin({
    // poinit3:
    service: resolve(__dirname, './index.js')
  })
]
// ... 
```

## app
```js
@service(['test1', 'test2', 'test-obj'])
class App {
  start() {
    console.log(this.$test1);
    console.log(this.$test2);
    console.log(this.$testObj);
  }
}
```
