# EasyImgPreloader
Image preloader, suitable for the need to load image resources in advance of the scenario.  

*tips: Image loading failure, we also identified as the loaded.*

### Install
```javascript
npm i easy-img-preloader
// or
yarn add easy-img-preloader
```

### Basic Usage
```javascript
easyImgPreloader(images,callback,timeout);
```

### Params

| name     | type             | default | Required | Desc                            |
| -------- | ---------------- | ------- | -------- | ------------------------------- |
| images   | Array            | []      | true     | Image list                      |
| callback | (progress) => {} | -       | -        | The loaded complete             |
| timeout  | Int             | 5000    | -        | The load timeout for each image |

### Examples

```javascript
import easyImgPreloader from 'easy-img-preloader';

easyImgPreloader([
    require('./p1.png'), // preload local image
    'http://www.test.com/p2.png' // preload remote image
],(progress)=>{
    progress === 1 && console.log('All images have been loaded');
},3000);
```

