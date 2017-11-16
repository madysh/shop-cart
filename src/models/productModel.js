class productModel{
  constructor(){
    this.name = ''
    this.price = 0;
    this.count = 1;
    this.imageName = 'default';
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
}

export default productModel