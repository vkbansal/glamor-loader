# Glamor Loader (Experimental!)

Load your css files using [glamor](https://github.com/threepointone/glamor)

## Install

```bash
npm install --save-dev glamor-loader
```

## Usage

**file.js**

```
import './styles.css'
```

**webpack.config.js**

```
modules.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'glamor-loader'
      }
    ]
  }
}
```

## License

[MIT](./LICENSE.md). Copyright(c) [Vivek Kumar Bansal](http://vkbansal.me/)

