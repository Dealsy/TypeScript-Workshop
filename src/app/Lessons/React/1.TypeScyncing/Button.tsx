const classNamesMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-200 text-black",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  disabled: "bg-gray-500 text-white",
};

type ButtonProps = {
  /**
   * This isn't ideal - we have to manually sync
   * the type of variant with the object above.
   *
   * 1. How do we rearrange this code so that we don't
   * have to manually sync the types?
   *
   * Hint: you'll need to use 'typeof' and 'keyof'.
   *
   * Resources:
   *
   * Keyof: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
   * Typeof: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
   */

  variant: "primary" | "secondary" | "success" | "danger" | "disabled";
};

export const Button = (props: ButtonProps) => {
  return <button className={classNamesMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="success"></Button>
      <Button variant="danger"></Button>
    </>
  );
};
