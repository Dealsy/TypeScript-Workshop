export type UserType = "student" | "employee";
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
