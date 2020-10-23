# imgPreloader
Image preloader, suitable for the need to load image resources in advance of the scenario.

### Install
```javascript
npm i img-preloader
// or
yarn add img-preloader
```

### Basic
```javascript
imgPreloader(images,callback,timeout);
```

### Params

| name     | type             | default | Required |
| -------- | ---------------- | ------- | -------- |
| images   | Array            | []      | true     |
| callback | (progress) => {} | -       | -        |
| timeout  | Init             | 5000    | -        |

### Examples

```javascript
import imgPreloader from 'img-preloader';

imgPreloader([
    require('./p1.png'),
    require('./p2.png')
],(progress)=>{
    progress === 1 && console.log('All images have been loaded');
},3000);
```

