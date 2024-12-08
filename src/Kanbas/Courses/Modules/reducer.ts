import { createSlice } from "@reduxjs/toolkit";
import db from "../../services/db";
import { Module } from "../../types";

interface ModulesState {
  modules: Module[];
}

interface AddModulePayload {
  name: string;
  course: string;
  description?: string;
}

const initialState: ModulesState = {
  modules: db.modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload }: { payload: AddModulePayload }) => {
      const newModule: Module = {
        _id: new Date().getTime().toString(),
        name: payload.name,
        description: payload.description || "New Module",
        course: payload.course,
        lessons: [],
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },
    updateModule: (state, { payload }: { payload: Partial<Module> & { _id: string } }) => {
      state.modules = state.modules.map((m) =>
        m._id === payload._id ? { ...m, ...payload } : m
      );
    },
    editModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;