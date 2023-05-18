type Props = {
  children: React.ReactNode;
};

export const TopicsList = (props: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[#2c89c6] font-extrabold mb-4">
        دسته‌بندی موضوعی:
      </div>
      <div className="my-2 flex flex-row justify-center items-center gap-3">
        {props.children}
      </div>
    </div>
  );
};
