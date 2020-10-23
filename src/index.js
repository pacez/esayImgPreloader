/**
 * name: impgPreLoader
 * author: pace_zhong@foxmail.com
 * desc: 图片预加载器
 * @param images []
 * @param callback (progress) => {}
 * @param timeout init  单位 ms
 */

export default (images = [], callback, timeout = 5000) => {

    let loaded = 0; // 加载完成数量
    const total = images.length;

    // 空数组，直接回返完成进度
    if (!total) {
        return callback && callback(1);
    }

    // 单张图片加载完成回调
    const onComplete = function () {
        loaded < total && (++loaded, callback && callback(loaded / total));
    };

    images.forEach((img, i) => {
        const imageObj = new Image();
        imageObj.onload = imageObj.onerror = onComplete; // 图片加载完成与加载失败，均认为加载完成
        imageObj.src = img;
    })

    /**
     * timeout * total 时间范围内，如果图片没有加载完，则识为图片加载完成，避免用户等待时间过长。
     */
    setTimeout(function () {
        loaded < total && (callback && callback(1))
    }, timeout * total);
};

