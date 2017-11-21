import PropTypes from 'prop-types';

const productPropType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  imageName: PropTypes.string.isRequired
}

export default productPropType;