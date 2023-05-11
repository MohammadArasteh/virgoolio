import { posts } from "@/api/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main>
      {/* <PostCard post={posts[0]} type="mainHeadStream" /> */}
      <PostCard post={posts[1]} type="headStream" />
      {/* <PostCard post={posts[2]} type="streamItem" /> */}
    </main>
  );
}
