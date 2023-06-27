type JSONResponse<T> = Response & { data: T };

export type { JSONResponse };

export type Payload = {
  type: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  payload?: any;
};

export type Dispatch = (payload: Payload) => void;
