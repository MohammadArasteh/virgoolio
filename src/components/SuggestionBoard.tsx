import { PostSummary } from "@/types/posts";
import SuggestionCard from "./cards/SuggestionCard";
import Paragraph from "./ui/Paragraph";

type Props = {
  posts: PostSummary[];
};

const SuggestionBoard = (props: Props) => {
  if (props.posts.length === 0) return null;
  return (
    <section className="mb-8">
      <Paragraph size={"sm"} className="mb-4">
        مطالب انتخابی برای شما
      </Paragraph>
      <div className="box-border flex flex-row flex-wrap">
        <div className="w-[66.6%] mb-[.9375em] pl-[.9375em]">
          <SuggestionCard post={props.posts[0]} />
        </div>
        <div className="w-[33.3%] mb-[.9375em]">
          <SuggestionCard post={props.posts[1]} />
        </div>
        <div className="w-[33.3%] pl-[.9375em]">
          <SuggestionCard post={props.posts[2]} />
        </div>
        <div className="w-[66.6%]">
          <SuggestionCard post={props.posts[3]} />
        </div>
      </div>
    </section>
  );
};

export default SuggestionBoard;
