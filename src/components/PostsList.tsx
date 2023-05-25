import { PostSummary } from "@/types/posts";
import PostCard from "./cards/PostCard";

type Props = { posts: PostSummary[] };

const PostList = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 max-w-[650px]">
      {props.posts.map((post, idx) => (
        <PostCard post={post} key={idx} />
      ))}
    </div>
  );
};

export default PostList;
