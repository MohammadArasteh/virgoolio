import { PostSummary } from "@/types/posts";
import { cva, VariantProps } from "cva";
import Image from "next/image";
import Heading from "../ui/Heading1";
import Link from "next/link";
import Paragraph from "../ui/Paragraph";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { GrBookmark } from "react-icons/gr";

type PostCardProps = { post: PostSummary };

const PostCard = (props: PostCardProps) => {
  return (
    <article className={"bg-white rounded-md py-[15px] px-[20px]"}>
      <header className="flex justify-between mb-4 relative">
        <div className="relative flex flex-row gap-3">
          <div className="relative w-[40px] h-[40px]">
            <a href={props.post.profile_url}>
              <Image
                src={props.post.profile_url}
                alt={props.post.title}
                fill
                className="inline-block rounded-full object-cover"
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Paragraph size={"sm"} className="font-bold mb-[10px]">
              {props.post.created_by}
            </Paragraph>
            <Paragraph size={"xs"}>{props.post.fancy_time}</Paragraph>
          </div>
        </div>
      </header>
      <div className="mb-[20px]">
        <a>
          <Heading className="mb-[20px]" size={"xs"}>
            {props.post.title}
          </Heading>
          <div className="relative h-[200px] w-full mb-[15px]">
            <Image
              fill
              src={props.post.thumbnail}
              alt={props.post.title}
              className="object-cover"
            />
          </div>
          <Paragraph className="text-gray-400">{props.post.body}</Paragraph>
        </a>
      </div>
      <div className="flex gap-3 w-full justify-between">
        <span className="flex flex-row gap-1 items-center">
          <RxHeart
            size={25}
            className="cursor-pointer text-gray-400 hover:text-red-600"
          />
          <Link href={"/"} className="text-gray-400">
            {props.post.like_count ? props.post.like_count : null}
          </Link>
        </span>
        <GrBookmark
          size={25}
          className="cursor-pointer text-gray-400"
          color="red"
        />
      </div>
    </article>
  );
};

export default PostCard;
