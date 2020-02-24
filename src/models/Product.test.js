import Product from './Product'

const validAttributes = {
  name: 'Product\'s name',
  price: Math.floor((Math.random() * 100) + 1),
  count: Math.floor((Math.random() * 100) + 1),
  imageName: 'default'
}
const attrNames = ['name', 'price', 'count', 'imageName'];
const availableImageNames = ['apple', 'carrot', 'fish', 'cake'];
const defaultProduct = new Product();

describe('constructor', () => {
  it('returns an object with expected attributes', () => {
    var expectedProduct = new Product({
      name: '',
      price: '',
      count: 1,
      imageName: 'default'
    });

    expect(defaultProduct).toEqual(expectedProduct);
  });
});

describe('availableImageNames', () => {
  it('returns an array of available names of images', () => {
    expect(defaultProduct.availableImageNames()).toEqual(availableImageNames);
  });
});

describe('isValid', () => {
  it('returns true if all attributes are not empty', () => {
    var product = new Product(validAttributes);

    expect(product.isValid()).toBeTruthy()
  });

  attrNames.map((attrName) => {
    it('returns false if ' + attrName + ' is not defined', () => {
      var attrs = validAttributes;
      delete attrs[attrName];
      var product = new Product(attrs);

      expect(product.isValid()).toBeFalsy()
    })
  });

  it('returns false if name is empty', () => {
    var attrs = validAttributes;
    attrs.name = ''
    var product = new Product(attrs);

    expect(product.isValid()).toBeFalsy()
  });

  ['price', 'count'].map((attr) => {
    it('returns false if ' + attr + ' is less than 1', () => {
      var attrs = validAttributes;

      [0, -1 * Math.floor((Math.random() * 100) + 1)].map((number) => {
        attrs[attr] = number;
        var product = new Product(attrs);
        expect(product.isValid()).toBeFalsy()
      })
    })
  });
});

describe('imageSrc', () => {
  it('returns the path to the product\'s image if a image\'s name was no passed', () => {
    var product = new Product({ imageName: 'apple' });
    var expectedValue = require('../images/product-image-apple.png');

    expect(product.imageSrc()).toEqual(expectedValue);
  });

  it('returns the path to the passed image if a image\'s name was passed', () => {
    var imageName = 'cake';
    var expectedValue = require('../images/product-image-cake.png');

    expect(defaultProduct.imageSrc(imageName)).toEqual(expectedValue);
  });
});

describe('amount', () => {
  it('returns product\'s amount', () => {
    var price = Math.floor((Math.random() * 100) + 1);
    var count = Math.floor((Math.random() * 100) + 1);
    var product = new Product({ price: price, count: count });
    var expectedValue = price * count;

    expect(product.amount()).toEqual(expectedValue);
  });
});