import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as productAction from '../actions/productActions';
import ProductList from './ProductList';

class ProductListContainer extends Component {

  async componentWillMount() {
    const { fetchProducts } = this.props.productActions;
    await fetchProducts();
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
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
};
ProductListContainer.defaultProps = {
  products: [],
};

const mapStateToProps = state => ({
  products: state.productList.products,
  loading: state.productList.loading,
});

const mapDispatchToProps = dispatch => ({
productActions : bindActionCreators(productAction,dispatch),  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
