import {createSlice} from '@reduxjs/toolkit';

interface Toast {
  id: string;
  title: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  icon: string; // Add icon property for icons
  action?: string;
}

const initialState: Toast[] = [];

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast(state, action: {payload: Toast}) {
      state.push(action.payload);
    },
    removeToast(state, action: {payload: string}) {
      state = state.filter(toast => toast.id !== action.payload);
    },
  },
});

export const {showToast, removeToast} = toastSlice.actions;

export default toastSlice.reducer;
