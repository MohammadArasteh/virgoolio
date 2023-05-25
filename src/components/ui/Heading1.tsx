import { cva, VariantProps } from "cva";
import cn from "@/utils/cn";

const heading1Variants = cva("font-extrabold leading-tight tracking-tighter", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
      xs: "text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading1Variants> {}

const Heading: React.FC<Heading1Props> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(heading1Variants({ size, className }))}>
      {children}
    </h1>
  );
};

export default Heading;
