const DEFAULT_IMAGE_NAME = 'default';
const IMAGE_NAMES = [DEFAULT_IMAGE_NAME, 'apple', 'carrot', 'fish', 'cake'];

class Product{
  constructor(args ={}){
    this.name = args['name'] || ''
    this.price = args['price'] || '';
    this.count = args['count'] || 1;
    this.imageName = args['imageName'] || DEFAULT_IMAGE_NAME;
  }

  isValid(){
    return (
      this.name.trim().length > 0 &&
      this.price > 0 &&
      this.count > 0 &&
      IMAGE_NAMES.includes(this.imageName)
    )
  }

  availableImageNames(){
    var defaultImageIndex = IMAGE_NAMES.indexOf(DEFAULT_IMAGE_NAME);
    var imageNames = IMAGE_NAMES.slice();
    imageNames.splice(defaultImageIndex, 1);

    return imageNames;
  }

  imageSrc(name){
    return require('../images/product-image-'+(name || this.imageName)+'.png');
  }

  amount(){
    return this.count * this.price;
  }
}

export default Product