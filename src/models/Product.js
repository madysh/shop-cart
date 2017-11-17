class Product{
  constructor(args ={}){
    this.name = args['name'] || ''
    this.price = args['price'] || '';
    this.count = args['count'] || 1;
    this.imageName = args['imageName'] || 'default';
  }

  isValid(){
    return this.name.trim().length > 0 && this.price > 0 && this.count > 0;
  }

  availableImageNames(){
    return ['apple', 'carrot', 'fish', 'cake'];
  }

  imageSrc(name){
    return require('../images/product-image-'+(name || this.imageName)+'.png');
  }

  amount(){
    return this.count * this.price;
  }
}

export default Product