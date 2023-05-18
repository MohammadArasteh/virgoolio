import { PostSummary } from "@/types/posts";
import { cva, VariantProps } from "cva";
import Image from "next/image";
import Heading1 from "../ui/Heading1";
import Link from "next/link";
import Paragraph from "../ui/Paragraph";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { GrBookmark } from "react-icons/gr";

const postCardVariants = cva(
  "box-border flex justify-between items-start w-[466px] h-[220px]",
  {
    variants: {
      type: {
        streamItem: "flex-row ",
        headStream: "flex-row",
        mainHeadStream: "flex-col",
      },
    },
    defaultVariants: {
      type: "streamItem",
    },
  }
);

type PostCardProps = { post: PostSummary } & VariantProps<
  typeof postCardVariants
>;

const PostCard = (props: PostCardProps) => {
  return (
    <article
      className={postCardVariants({
        type: props.type,
        className: "bg-slate-100 rounded-md",
      })}
    >
      <div className="relative h-52 w-full">
        <Image
          src={props.post.thumbnail}
          alt={props.post.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className="flex flex-col gap-2 p-1">
        <Link href={"/"}>
          <Heading1 size="sm">{props.post.title}</Heading1>
        </Link>
        <Link href={"/"}>
          <Paragraph>{props.post.body}</Paragraph>
        </Link>
        <section className="flex flex-row justify-between items-center">
          <div>
            <span>{props.post.created_by}</span>
            <br />
            <span>
              {props.post.fancy_time}{" "}
              {`${
                props.post.comment_count
                  ? `- ${props.post.comment_count} نظر`
                  : ``
              }`}
            </span>
          </div>
          <div className="flex gap-3">
            <span className="flex flex-row gap-1 items-center">
              <RxHeart
                size={25}
                className="cursor-pointer hover:text-red-600"
              />
              <Link href={"/"}>
                {props.post.like_count ? props.post.like_count : null}
              </Link>
            </span>
            <GrBookmark size={25} className="cursor-pointer" />
          </div>
        </section>
      </section>
    </article>
  );
};

export default PostCard;
