import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  name: string;
};

export const Icon: FC<IconProps> = ({
  name,
  className: _className,
  ...props
}) => {
  return (
    <span {...props} className={["material-icons", "_className"].join(" ")}>
      {name}
    </span>
  );
};
