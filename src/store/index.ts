import { configureStore } from '@reduxjs/toolkit';
import todoSlice from 'src/store/todo-slice';

export default configureStore({
  reducer: { todoSlice },
});
