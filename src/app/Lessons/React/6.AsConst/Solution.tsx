import clsx from "clsx";

const Sizes = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
} as const;

const Style = {
  PRIMARY: "PRIMARY",
  DANGER: "DANGER",
  SUCCESS: "SUCCESS",
  AVAILABILITY: "AVAILABILITY",
} as const;

type Sizes = (typeof Sizes)[keyof typeof Sizes];
type Style = (typeof Style)[keyof typeof Style];

/**
 * The above code is a bit confusing, so let's break it down.
 *
 * First, we have the `as const` keyword. This is a new feature
 * in TypeScript 3.4. It allows us to define a type as a literal
 * type. This means that the type will be inferred as the literal
 * value, rather than the type of the value.
 *
 * For example, if we have a variable `const foo = "bar"`, TypeScript
 * will infer the type of `foo` as `string`. However, if we have
 * `const foo = "bar" as const`, TypeScript will infer the type of
 * `foo` as `"bar"`.
 *
 * Next, we have the `typeof` keyword. This is a built-in TypeScript
 * keyword that allows us to get the type of a value. For example,
 * if we have `const foo = "bar"`, we can get the type of `foo` by
 * using `typeof foo`. This will give us the type `"bar"`.
 *
 * You can learn more about typeof and keyof in Lesson 1, TypeScyncing.
 *
 *
 *  as const is deeply immutable, so you can't change the value of the object.
 *  unlikley the JavaScript value of object.freeze, which only freezes the top level of the object
 *  meaning it makes the top level read only, but the nested properties can still be changed.
 *
 *  as const is a deep freeze, meaning it freezes the top level and all nested properties.
 *
 *  Now we have all of the benefits of using an ENUM, but we don't have any of the drawbacks.
 *
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
