import { account, databases } from "../../services/appwriteConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as ActionTypes from "../constants/action-types";

const { VITE_DATABASE_ID, VITE_PRODUCTS_TABLE_ID, VITE_USERS_TABLE_ID } =
  import.meta.env;

export const userAuth = createAsyncThunk("/auth", () => {
  if (!!!sessionStorage.getItem("secret_key")) {
    let urlSearchParams = new URLSearchParams(window.location.search);
    let secret = urlSearchParams.get("secret");
    let userId = urlSearchParams.get("userId");
    account
      .updateVerification(userId, secret)
      .then((res) => {
        navigate(`/seller-home/dashboard/`+userId);
      })
      .catch((er) => {
        console.log("login failed");
      });
  }
});

