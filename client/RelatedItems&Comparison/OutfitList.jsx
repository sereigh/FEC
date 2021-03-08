import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.jsx';
import PlusCard from './PlusCard.jsx';

const OutfitList = ({selectProductId, selectAnotherProduct, addNewOutfit, deleteOutfit, userOutfits}) => (
  <div className="outfitList">
    <div className="carousel">
      <PlusCard selectProductId={selectProductId} addNewOutfit={addNewOutfit} />
      {userOutfits.map(productId => (
        <ProductCard key={productId} productId={productId} selectAnotherProduct={selectAnotherProduct} deleteOutfit={deleteOutfit} />
      ))}
    </div>
  </div>
);

OutfitList.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectAnotherProduct: PropTypes.func.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  deleteOutfit: PropTypes.func.isRequired,
  userOutfits: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default OutfitList;
