import { createSelector } from "reselect";
import { UsersStore } from "./types";

type State = { user: UsersStore };

const getMainState = (state: State) => state.user;
const getUserId = createSelector(getMainState, (store) => store.user.userId);
const getUser = createSelector(getMainState, (store) => store.user);
const getStep = createSelector(getMainState, (store) => store.currentStep);
export default {
  getUserId,
  getStep,
  getUser,
};
