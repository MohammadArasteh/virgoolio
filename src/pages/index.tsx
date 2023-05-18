import PostCard from "@/components/PostCard";
import TopicItem from "@/components/TopicItem";
import { TopicsList } from "@/components/TopicsList";
import { GetServerSideProps } from "next";
import axios from "axios";

type PageProps = {
  topics: Topic[];
};

export default function Home(props: PageProps) {
  return (
    <main className="mx-auto px-[.9375em] w-[1000px]">
      {/* <PostCard post={posts[0]} type="mainHeadStream" /> */}
      {/* <PostCard post={posts[1]} type="headStream" /> */}
      {/* <PostCard post={posts[2]} type="streamItem" /> */}
      {!!props.topics.length && (
        <TopicsList>
          {props.topics.map((topic, idx) => (
            <TopicItem
              key={idx}
              topic={topic}
              variant={idx == 0 ? "selected" : "normal"}
            />
          ))}
        </TopicsList>
      )}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const response = await axios("http://localhost:3000/api/topics");
  const topics: Topic[] = [];
  if (response && response.status === 200) {
    topics.push(...response.data);
  }
  return { props: { topics } };
};
