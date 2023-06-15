type GeneralResponse<T> = {
  result: T | null;
  status: boolean;
  message: string;
};

export type { GeneralResponse };
