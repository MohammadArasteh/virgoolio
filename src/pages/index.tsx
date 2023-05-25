import { TopicsList } from "@/components/TopicsList";
import { GetServerSideProps } from "next";
import axios from "axios";
import SuggestionBoard from "@/components/SuggestionBoard";
import PostsList from "@/components/PostsList";
import { PostSummary } from "@/types/posts";

type PageProps = {
  topics: Topic[];
  suggestedPosts: PostSummary[];
  posts: PostSummary[];
};

export default function Home(props: PageProps) {
  return (
    <main className="mx-auto px-[.9375em] w-[1200px]">
      <TopicsList topics={props.topics} />
      <SuggestionBoard posts={props.suggestedPosts} />
      <PostsList posts={props.posts} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const topicsResp = await axios("http://localhost:3000/api/topics");
  const topics: Topic[] = [];
  if (topicsResp.status === 200) topics.push(...topicsResp.data);

  const suggestedPostsResp = await axios(
    "http://localhost:3000/api/suggestedPosts"
  );
  const suggestedPosts: PostSummary[] = [];
  if (suggestedPostsResp.status === 200)
    suggestedPosts.push(...suggestedPostsResp.data);

  const postsResp = await axios("http://localhost:3000/api/posts");
  const posts: PostSummary[] = [];
  if (postsResp.status === 200) posts.push(...postsResp.data);

  return { props: { topics, suggestedPosts, posts } };
};
