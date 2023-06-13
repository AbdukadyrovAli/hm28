import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logOut } from "../../store/auth/authThunk";

export const AdminHeader = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    return dispatch(logOut())
  };

  return (
    <HeaderStyle>
      <Container>
        <MealsText>React Meals</MealsText>

        <Button variant="contained" onClick={logoutHandler}>
          Log out
        </Button>
      </Container>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
  top: 0;
  z-index: 998;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MealsText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
