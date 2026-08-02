import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Idea } from "./types";

export type IdeasStatus = "idle" | "loading" | "succeeded" | "failed";

export interface IdeasState {
  list: Idea[];
  status: IdeasStatus;
  error: string | null;
}

const initialState: IdeasState = {
  list: [],
  status: "idle",
  error: null,
};

const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {

    // Read

    fetchIdeas(state) {
      state.error = null;
      state.status = "loading";
    },

    fetchSucceeded(state, action) {
      state.status = "succeeded";
      state.list = action.payload;
    },

    fetchFailed(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },

    // Create

    createIdeas(state, action: PayloadAction<Omit<Idea, "_id">>) {},

    createSucceeded(state, action) {
      state.list.push(action.payload);
      state.status = "succeeded";
    },

    createFailed(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },

    // Update

    updateIdeas(state, action: PayloadAction<{ id: string, data: Partial<Idea> }>) {},

    updateSucceeded(state, action) {
      const index = state.list.findIndex((idea) => {
        idea._id === action.payload._id
      });

      if (index !== -1) {
        state.list[index] = action.payload;
      };

      state.status = "succeeded";
    },

    updateFailed(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },    
    
    // Delete

    deleteIdeas(state, action: PayloadAction<{ id: string }>) {},

    deleteSucceeded(state, action) {
      state.list = state.list.filter((idea) => {
        idea._id !== action.payload._id
      });

      state.status = "succeeded";
    },

    deleteFailed(state, action) {
      state.error = action.payload;
      state.status = "failed";
    }
  },
});

export const { fetchIdeas, fetchSucceeded, fetchFailed, createIdeas, createSucceeded, createFailed, updateIdeas, updateSucceeded, updateFailed,
    deleteIdeas, deleteSucceeded, deleteFailed } = ideasSlice.actions;

export default ideasSlice.reducer;
