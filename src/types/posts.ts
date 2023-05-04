type Post = {
  body: string;
  comment_ids: string[];
  created_at: number;
  creator_id: string;
  creator_username: string;
  creator_profile_url: string;
  edited_at: string | null;
  liked_by: string[];
  post_id: number;
  tags: string[];
  title: string;
  topic: string;
  thumbnail: string | null;
  fancy_time: string;
  is_saved: boolean;
};

type PostSummary = {
  title: string;
  thumbnail: string;
  profile_url: string;
  body: string;
  created_by: string;
  created_at: number;
  fancy_time: string;
  like_count: number;
  is_saved: boolean;
};

type CommentType = {
  comment_id: number;
  created_at: string;
  created_by: string;
  text: string;
};

export type { Post, PostSummary, CommentType };
