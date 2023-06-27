import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, Gender, LookingType, Step } from "types";
import types from "./types";

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  const setUserId = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_ID, payload });
    },
    [dispatch]
  );

  const setUserName = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_NAME, payload });
    },
    [dispatch]
  );

  const setUserGender = useCallback(
    (payload: Gender) => {
      dispatch({ type: types.SET_USER_GENDER, payload });
    },
    [dispatch]
  );

  const setUserLocation = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_LOCATION, payload });
    },
    [dispatch]
  );

  const setUserLookingFor = useCallback(
    (payload: Gender) => {
      dispatch({ type: types.SET_USER_LOOKING, payload });
    },
    [dispatch]
  );
  const setUserLookingType = useCallback(
    (payload: LookingType) => {
      dispatch({ type: types.SET_USER_LOOKING_TYPE, payload });
    },
    [dispatch]
  );

  const setUserPassword = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_PASSWORD, payload });
    },
    [dispatch]
  );

  const setUserEmail = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_EMAIL, payload });
    },
    [dispatch]
  );

  const setUserDOB = useCallback(
    (payload: string) => {
      dispatch({ type: types.SET_USER_DOB, payload });
    },
    [dispatch]
  );
  const setCurrentStep = useCallback(
    (payload: Step) => {
      dispatch({ type: types.SET_STEP, payload });
    },
    [dispatch]
  );

  const clear = useCallback(() => {
    dispatch({ type: types.CLEAR });
  }, [dispatch]);

  return {
    setUserDOB,
    setUserEmail,
    setUserGender,
    setUserId,
    setUserLocation,
    setUserLookingFor,
    setUserLookingType,
    setUserName,
    setUserPassword,
    setCurrentStep,
    clear,
  };
}
