import { PostSummary } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../ui/Paragraph";

type Props = {
  post: PostSummary;
};

const SuggestionCard = ({ post }: Props) => {
  return (
    <div className="  w-full relative h-80">
      <Link href={post.link} title={post.title}>
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover rounded"
        />
        <div className="absolute flex flex-col bottom-0 p-8 text-white ">
          <Paragraph className="text-white font-bold">{post.title}</Paragraph>
          <div className="flex flex-row items-center gap-[0.6rem]">
            <Image
              src={post.profile_url}
              alt={post.created_by}
              className="rounded-full"
              width={45}
              height={45}
            />
            <div className="flex flex-col">
              <span>{post.created_at}</span>
              <span>{post.fancy_time}</span>
            </div>
          </div>
        </div>
      </Link>
      <div></div>
    </div>
  );
};

export default SuggestionCard;
