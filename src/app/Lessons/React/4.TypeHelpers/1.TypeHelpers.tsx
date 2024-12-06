/**
 * Currently, we are using a Discriminated Union to enforce that
 * we can only pass in the correct props for each variant.
 *
 * But this syntax is a bit verbose. Wouldn't it be nice if we could
 * somehow use a generic type to make this more concise?
 *
 * 1. What can we add to our file to HELP break down our Discriminated
 * Union into a more generic type?
 *
 * Hint: you'll need to use a generic type.
 *
 * Resource:
 *
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

import { ChangeEventHandler } from "react";

type InputProps =
  | {
      value: string;
      onChange: ChangeEventHandler;
      label: string;
    }
  | {
      value?: undefined;
      onChange?: undefined;
      label: string;
    };

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export const Test = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />
    </div>
  );
};
