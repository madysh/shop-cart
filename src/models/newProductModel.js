class newProductModel {
  constructor() {
    this.name = ''
    this.price = 0;
    this.count = 0;
  }

  setValues(attr, value){
    this[attr]=value
  }

  isValid(){
    return this.name.trim().length > 0 && this.price > 0 && this.count > 0;
  }
}

export default newProductModel