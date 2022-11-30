import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { userSliceActions } from '../slices/userSlice';
import { menuSliceAction } from '../slices/menuSlice';

const actions = {
  ...userSliceActions,
  ...menuSliceAction,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
