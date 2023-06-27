import { Payload } from "types";
import { cloneDeep } from "lodash";
import types, { UsersStore } from "./types";

export const initialValues: UsersStore = {
  user: {
    userId: "",
    username: "",
    DOB: "",
    location: "",
    looking_for: "",
    email: "",
    gender: "",
    password: "",
    looking_type: "",
  },
  currentStep: {} as any,
};

export default function (
  state: UsersStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: payload,
        },
      };
    case types.SET_USER_ID:
      return {
        ...state,
        user: {
          ...state.user,
          userId: payload,
        },
      };
    case types.SET_USER_DOB:
      return {
        ...state,
        user: {
          ...state.user,
          DOB: payload,
        },
      };
    case types.SET_USER_LOCATION:
      return {
        ...state,
        user: {
          ...state.user,
          location: payload,
        },
      };
    case types.SET_USER_GENDER:
      return {
        ...state,
        user: {
          ...state.user,
          gender: payload,
        },
      };
    case types.SET_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: payload,
        },
      };
    case types.SET_USER_LOOKING:
      return {
        ...state,
        user: {
          ...state.user,
          looking_for: payload,
        },
      };
    case types.SET_USER_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: payload,
        },
      };
    case types.SET_USER_LOOKING_TYPE:
      return {
        ...state,
        user: {
          ...state.user,
          looking_type: payload,
        },
      };
    case types.SET_STEP:
      return {
        ...state,
        currentStep: payload,
      };

    case types.CLEAR:
      return cloneDeep(initialValues);

    default:
      return state;
  }
}
