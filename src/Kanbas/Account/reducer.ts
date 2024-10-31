// src/Kanbas/Account/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    "_id": "123",
    "username": "iron_man",
    "password": "stark123",
    "firstName": "Tony",
    "lastName": "Stark",
    "email": "tony@stark.com",
    "dob": "1970-05-29T00:00:00.000Z",
    "role": "FACULTY",
    "loginId": "001234561S",
    "section": "S101",
    "lastActivity": "2020-10-01",
    "totalActivity": "10:21:32"
  },
  {
    "_id": "234",
    "username": "dark_knight",
    "password": "wayne123",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "email": "bruce@wayne.com",
    "dob": "1972-02-19",
    "role": "STUDENT",
    "loginId": "001234562S",
    "section": "S101",
    "lastActivity": "2020-11-02",
    "totalActivity": "15:32:43"
  },
  // ... 其他用户数据 ...
];

const initialState = {
  users: users,
  currentUser: users[0] // 设置默认用户为第一个用户（Tony Stark）
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    switchUser: (state, action) => {
      const userId = action.payload;
      const user = state.users.find(u => u._id === userId);
      if (user) {
        state.currentUser = user;
      }
    }
  },
});

export const { setCurrentUser, switchUser } = accountSlice.actions;
export default accountSlice.reducer;