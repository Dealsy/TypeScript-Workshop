/**
 * Currently, we have two types, one is a union with the types of
 * "student" and "employee", and the other is an object type with
 * the properties for each union type. In our React component
 * `UserInfoComponent`, we have a conditional that checks the type
 * of the `type` property, and then renders the appropriate JSX.
 *
 * So for example if the `type` property is "student", then we
 * render the JSX for a student with the university and major props.
 *
 * and similarly, if the `type` property is "employee", then we
 * render the JSX for an employee with the company and position props.
 *
 * With the current setup, we can actually pass 'employee' as the type,
 * and then pass the 'student' props, and TypeScript is okay with this.
 *
 * Wouldn't it be good if we could conditionally type the props based on
 * the type property?
 *
 * 1. Figure out a way to change UserData, so that it uses conditional types
 *  to conditionally type the props based on the type property.
 *
 * Hint: you'll need to conditional types, you'll probably want to move the 'types'
 * props into their own type, you'll need to use a generic, and you'll need to use the extends keyword.
 *
 * Resources:
 *
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

type UserType = "student" | "employee";

export type UserData<T extends UserType> = T extends "student"
  ? {
      type: T;
      university: string;
      major: string;
    }
  : {
      type: T;
      company: string;
      position: string;
    };

const UserInfoComponent = <T extends UserType>(props: UserData<T>) => {
  return (
    <div>
      {props.type === "student" ? (
        <div>
          <h3>Student from {props.university}</h3>
          <p>Majoring in {props.major}</p>
        </div>
      ) : (
        <div>
          <h3>Employee at {props.company}</h3>
          <p>Position: {props.position}</p>
        </div>
      )}
    </div>
  );
};

export default function Parent() {
  return (
    <div className="App">
      <h1>Complex Conditional Types Demo</h1>

      <UserInfoComponent
        type="student"
        university="Stanford University"
        major="Computer Science"
      />

      <UserInfoComponent
        type="employee"
        company="OpenAI"
        position="Software Developer"
      />
    </div>
  );
}
