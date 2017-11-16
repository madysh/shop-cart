class newProductModel{
  constructor(){
    this.name = ''
    this.price = 0;
    this.count = 1;
    this.imageName = 'default'
  }

  setValue(attr, value){
    this[attr]=value
  }

  isValid(){
    return this.name.trim().length > 0 && this.price > 0 && this.count > 0;
  }

  imageSrc(){
    return require('../images/product-image-'+this.imageName+'.png')
  }
}

export default newProductModel