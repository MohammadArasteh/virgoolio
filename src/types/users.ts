type User = {
  first_name: string | null;
  last_name: string | null;
  password: string;
  profile_url: string | null;
  user_id: number;
  user_name: string | null;
  description: string | null;
};

type UserInfo = Omit<User, "password">;

export type { User, UserInfo };
