import TopicItem from "./TopicItem";

type Props = {
  topics: Topic[];
};

export const TopicsList = (props: Props) => {
  if (props.topics.length === 0) return null;
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[#2c89c6] font-extrabold mb-4">
        دسته‌بندی موضوعی:
      </div>
      <div className="my-2 flex flex-row justify-between items-center gap-3">
        {props.topics.map((topic, idx) => (
          <TopicItem
            key={idx}
            topic={topic}
            variant={idx == 0 ? "selected" : "normal"}
          />
        ))}
      </div>
    </div>
  );
};
