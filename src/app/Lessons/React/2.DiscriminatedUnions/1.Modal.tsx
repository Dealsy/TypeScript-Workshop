/**
 * 1. Currently, ModalProps lets you pass in various impossible combinations of props.
 *
 * For instance, you can pass in a `variant` of "title" without passing in a title,
 * or you can pass in a `variant` of "no-title" WITH a title.
 *
 * 1. How do we rearrange this code so that we can only pass in the correct props
 * for each variant? (Hint: you'll need to use a discriminated union.)
 *
 * Resource:
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions
 */

type ModalProps =
  | {
      variant: "title";
      title: string;
    }
  | {
      variant: "no-title";
    };

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    return <div>Title: {props.title}</div>;
  }
};

export const Parent = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Oh no!"
      />
    </div>
  );
};
