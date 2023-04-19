import { Dispatch } from "redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const SET_USER = "SET_USER";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const postUserAction = (user: {
  username: string;
  email: string;
  password: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("posted");
        let data = response.json();
        return data;
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserImageAction = (userId: string, file: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/image/${userId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      console.log(response);
      if (response.ok) {
        console.log("You made it!");
      } else {
        console.log("Try harder!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginUser = createAsyncThunk(
  "login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data.user;
  }
);

export const fetchMyProfileAction = (accessToken: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.ok) {
        const userData = await res.json();
        // setUserData(userData);
        dispatch({
          type: GET_MY_PROFILE,
          payload: userData,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchAllUserssAction = (accessToken: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.ok) {
        let users = await res.json();
        dispatch({
          type: GET_ALL_USERS,
          payload: users,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
