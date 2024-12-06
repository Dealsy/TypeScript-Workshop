import { ChangeEventHandler } from "react";

type AllOrNothing<T> = T | ToUndefinedObject<T>;
type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;

type InputProps = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
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
