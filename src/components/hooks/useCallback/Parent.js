import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(2000);

  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" value={age} />
      <Button clickHandler={incAge}>incrementAge</Button>
      <Count text="Salary" value={salary} />
      <Button clickHandler={incSalary}>increment Salary</Button>
    </div>
  );
}

export default Parent;
