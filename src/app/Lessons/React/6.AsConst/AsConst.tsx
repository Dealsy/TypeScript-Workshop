import clsx from "clsx";

const enum Sizes {
  SMALL,
  MEDIUM,
  LARGE,
}

const enum Style {
  PRIMARY,
  DANGER,
  SUCCESS,
  AVAILABILITY,
}

/**
 *  AsConst.tsx
 *
 *  Below we have a button component that has a few different styles and sizes.
 *  The styles and sizes are currently defined with ENUMS.
 *
 *  However, ENUMS are not the best way to define these types. TypeScript has a
 *  section documented around this topic explaining the pitfalls of using ENUMS.
 *
 *  We want to keep the same sytnax for the Button component, but we want to
 *  change the way we define the types for the styles and sizes.
 *
 *  1. Change the way the styles and sizes are defined so that they are not ENUMS.
 *
 *  Hint: you'll need the `as const` keyword and you'll need to make use of the typeof and keyof keywords.
 *
 *  Resources: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 *
 *  Enum Pit falls: https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls
 */

type ButtonProps = {
  title: string;
  size: Sizes;
  style: Style;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Button({
  title,
  size,
  style,
  className,
  onClick,
  disabled,
  children,
}: ButtonProps) {
  const buttonClasses = clsx(
    "leading-none rounded-lg",
    {
      [`px-4 py-1 text-xs`]: size === Sizes.SMALL,
      [`px-6 py-2 text-sm`]: size === Sizes.MEDIUM,
      [`px-8 py-3 text-lg`]: size === Sizes.LARGE,
      [`bg-blue-700 text-blue-100 hover:bg-blue-500`]: style === Style.PRIMARY,
      [`bg-red-700 text-red-100 hover:bg-red-500`]: style === Style.DANGER,
      [`bg-green-700 text-green-100 hover:bg-green-500`]:
        style === Style.SUCCESS,
      [`rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium leading-6 text-white`]:
        style === Style.AVAILABILITY,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children ? children : title}
    </button>
  );
}
