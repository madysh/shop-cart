class productModel{
  constructor(args={}){
    this.name = args['name'] || ''
    this.price = args['price'] || 0;
    this.count = args['count'] || 1;
    this.imageName = args['imageName'] || 'default';
  }

  setValue(attr, value){
    this[attr]=value;
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

export default productModel