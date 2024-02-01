import React, { useEffect } from 'react'
import "./ProductSummary.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import InfoBox from '../../infoBox/InfoBox';
import { useDispatch, useSelector } from "react-redux";
import { CALC_STORE_VALUE, CalC_OUTOFSTOCK, CALC_CATEGORY, selectCategory, selectOutOfStock, selectTotalStoreValue } from '../../../redux/features/product/productSlice';
//icons
const earningIcon = <AiFillDollarCircle size={40} color='#fff'/>;
const productIcon = <BsCart4 size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;
const outOfStockIcon = <BsCartX size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({products}) => {
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const outOfStock = useSelector(selectOutOfStock);
  const category = useSelector(selectCategory);
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(CALC_STORE_VALUE(products));
  dispatch(CalC_OUTOFSTOCK(products));
  dispatch(CALC_CATEGORY(products));
  },[products, dispatch]);
  return (
    <div className='product-summary'>
     <h3 className='--mt'>Inventory Start</h3>
     <div className='info-summary'>
       <InfoBox 
       bgColor="card1" 
       icon={productIcon} 
       title={"Total Products"} 
       count={products.length}/>

       <InfoBox 
       bgColor="card2" 
       icon={earningIcon} 
       title={"Total Store Value"} 
       count={`$${formatNumbers(totalStoreValue.toFixed(2))}`}/>

       <InfoBox 
       bgColor="card3" 
       icon={outOfStockIcon} 
       title={"Out of Stock"} 
       count={outOfStock}/>

       <InfoBox 
       bgColor="card4" 
       icon={categoryIcon} 
       title={"All Categories"} 
       count={category.length}/>
     </div>
    </div>
  )
}

export default ProductSummary