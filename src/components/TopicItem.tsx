import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";
import { cva, VariantProps } from "cva";

const topicVariants = cva(
  "text-white font-bold absolute top-0 left-0 h-full w-full flex items-center justify-center",
  {
    variants: {
      variant: {
        selected: "bg-[rgba(16,122,190,.85)]",
        normal: "bg-[rgba(0,0,0,.5)]",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

type Props = {
  topic: Topic;
} & VariantProps<typeof topicVariants>;

const TopicItem = (props: Props) => {
  return (
    <Link
      className="relative h-[60px] w-[150px] rounded-md overflow-hidden"
      href={props.topic.link}
    >
      <Image
        src={props.topic.image}
        fill
        alt={props.topic.title}
        className="absolute object-cover"
      />
      <span className={topicVariants({ variant: props.variant })}>
        {props.topic.title}
      </span>
    </Link>
  );
};

export default TopicItem;
