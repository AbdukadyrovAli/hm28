import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFoods } from "../../api/foodsService";

export const addFoodsRequest = createAsyncThunk(
  "foods/addFoods",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await addFoods(payload);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
