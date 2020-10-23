# imgPreloader
Image preloader, suitable for the need to load image resources in advance of the scenario.  

*tips: Image loading failure, we also identified as the loaded.*

### Install
```javascript
npm i easy-img-preloader
// or
yarn add easy-img-preloader
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
import imgPreloader from 'easy-img-preloader';

imgPreloader([
    require('./p1.png'), // preload local image
    'http://www.test.com/p2.png' // preload remote image
],(progress)=>{
    progress === 1 && console.log('All images have been loaded');
},3000);
```

