# imgPreloader
Image preloader, suitable for the need to load image resources in advance of the application scenario.

### Install
```javascript
npm i img-preloader
// or
yarn add img-preloader
```

### Examples
```javascript
import imgPreloader from 'img-preloader';

imgPreloader([
    require('./p1.png'),
    require('./p2.png')
],(progress)=>{
    progress && console.log('All images have been loaded');
},3000);
```