import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addFoodsRequest } from "../../store/foods/foodsThunk";

export const AddFoods = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      title: data.title,
      description: data.description,
      price: +data.price,
    };
    dispatch(addFoodsRequest(newData));
    setData({
      title: "",
      description: "",
      price: 0,
    });
  };
  return (
    <Container style={{ marginTop: "200px" }}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={data.title}
          placeholder="Title"
          name="title"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          value={data.description}
          placeholder="Description"
          name="description"
          onChange={onChangeHandler}
        />
        <input
          type="number"
          value={data.price}
          placeholder="prise"
          name="price"
          onChange={onChangeHandler}
        />
        <button type="submit">add </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #8080b3;
`;
