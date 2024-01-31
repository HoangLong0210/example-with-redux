import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const linkSlice = createSlice({
  name: "links",
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      const newLink = {
        id: v4(),
        linkSocial: action.payload.linkSocial,
        time: action.payload.time,
      };
      state.push(newLink);
    },
  },
});

export const { addLink } = linkSlice.actions;

export default linkSlice.reducer;
