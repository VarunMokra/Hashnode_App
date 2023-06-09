import { Box, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Banner from "./Banner";
import SubHeader from "./SubHeader/SubHeader";
import Product from "./Products/Product";
import Poster from "./Poster";
import { DataContext } from "../../utilities/ContextStore";
import NavBar from "../../Navbar/Navbar";
import {
  deleteUserCartItemsAndAddToOrdersItems,
  listCurrentUserCartItems,
  listDefaultProducts,
} from "../../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { databases } from "../../../services/appwriteConfig";

const { VITE_DATABASE_ID, VITE_USERS_TABLE_ID, VITE_PRODUCTS_TABLE_ID } =
  import.meta.env;
const BannerWrapper = styled(Box)`
  padding: 7px;
  background-color: #f1f3f6;
`;

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDefaultProducts());
    dispatch(listCurrentUserCartItems());
    if(localStorage.getItem('payment_token')){
      dispatch(deleteUserCartItemsAndAddToOrdersItems());
      localStorage.removeItem('payment_token')
    }
  }, []);


  return (
    <div>
      <NavBar />
      <SubHeader />
      <BannerWrapper>
        <Banner />
      </BannerWrapper>
      <Product title="Top Offers" />
      <Product title="Today's Fashion Deals" />
      <Poster />
      <Product title="Fashion Best Sellers" />
      <Product title="Shop for a Cool Summer" />
    </div>
  );
}
