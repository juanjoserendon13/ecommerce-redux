import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts, fetchProduct, saveProduct } from '../actions/productActions';
// import * as productActions from '../actions/productActions';
import ProductList from './ProductList';

export class ProductListContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  async componentWillMount() {
    // const { fetchProducts } = this.props;
    await this.props.fetchProducts();
  }

  render() {
    const { loading, products } = this.props;
    return (
      <ProductList
        loading={loading}
        products={products}
      />
    );
  }
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};
ProductListContainer.defaultProps = {
  products: [],
};

const mapStateToProps = state => ({
  products: state.productList.products,
  loading: state.productList.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchProducts,
    fetchProduct,
    saveProduct,
  },
  dispatch,
);

export default connect(mapStateToProps, { fetchProducts })(ProductListContainer);
