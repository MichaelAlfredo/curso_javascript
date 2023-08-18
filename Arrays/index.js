const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 23,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 22,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 21,
    course: "Financial Management",
  },
];

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

// for-forEach
(() => {
  /* for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  } */
  /*  students.forEach(function (student, index, students) {
    console.log(student);
    console.log(index);
    console.log(students);
  }); */
  /*  const fullnames = [];

  students.forEach((student) => {
    fullnames.push(student.name + " " + student.lastname);
  });

  console.log(fullnames); */
})();

// map
(() => {
  /*   const fullname = students.map(function (student) {
    return student.name + " " + student.lastname;
  });

  console.log(fullname); */
  /*  const name = students.map((student) => student.name + " " + student.lastname);
  console.log(name); */
  /*  const name = students.map((student) => {
    return {
      fullname: student.name + " " + student.lastname,
      age: student.age,
      course: student.course,
    };
  });
  console.log(name); */
  /*   const name = students.map((student) => {
    return {
      name: student.name,
      lastname: student.lastname,
      age: student.age,
      course: student.course,
      title: `${student.name} - ${student.course}  `,
    };
  });
  console.log(name); */
  /*  const name = students.map((student) => {
    return {
      ...student,
      title: `${student.name} - ${student.course}  `,
    };
  });
  console.log(name); */
  /*  const name = students.map((student) => {
    return {
      ...student,
      course: "Programming",
    };
  });
  console.log(name); */
  /* const newcourses = students.map((student) => ({
    ...student,
    course: "Programming",
  }));

  const doubleage = newcourses.map((student) => ({
    ...student,
    age: student.age * 2,
  }));
  console.log(doubleage); */
  /* const doubleage = students
    .map((student) => ({
      ...student,
      course: "Programming",
    }))
    .map((student) => ({
      ...student,
      age: student.age * 2,
    }));
  console.log(doubleage); */
})();

//filter

(() => {
  /*  const developers = [];

  for (let i = 0; i < students.length; i++) {
    if (students[1].course === "Web Development") {
      developers.push(students[1]);
    }
  }
  console.log(developers); */
  /* const result = students.filter(function (student) {
    if (student.course === "Web Development") {
      return true;
    }
  });

  console.log(result); */
  /*   const result = students.filter(
    (student) => student.course === "Web Development"
  ); */
  /*  const result = students.filter(
    (student) => student.course !== "Web Development"
  ); */
  /* const result = students.filter((student) => student.age < 22);

  console.log(result); */
})();

//reduce
(() => {
  /*   let total = 0;
  for (let i = 0; 1 < students.length; i++) {
    total += students[1].age;
  }
 */
  // console.log(total);
  /*   const result = students.reduce(function (total, student) {
    return total + student.age;
  }, 0);
  console.log(result); */
  /* const result = students.reduce((total, student) => total + student.age, 0);
  console.log(result); */
  /* const result = developers.reduce(function (allSkills, student) {
    return Array.from(new Set([...allSkills, ...student.skills]));
  }, []);
  console.log(result); */
})();

//sort
(() => {
  /*  const sortedStudents = students.sort(function (first, second) {
    if (first.age < second.age) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(sortedStudents); */
  /* const sortedStudents = students.sort((a, b) => (a.age > b.age ? 1 : -1));
  console.log(sortedStudents); */
  /* const numbers = [10, 30, 1000, 100];

  console.log(numbers.sort((a, b) => a - b));
   */
})();

//find
(() => {
  /* const result = students.find(function (student) {
    if (student.age === 20) {
      return 1;
    }
  });
  console.log(result); */
  /*  const result = students.find((student) => student.name === "Ryan");

  console.log(result); */
})();

//some
(() => {
  /*   const result = students.some(function (student) {
    return student.lastname === "Perez";
  });
  console.log(result); */
  /* const result = students.some((student) => student.lastname === "Doe");
  console.log(result); */
})();

//every
(() => {
  /* const result = students.every((student) => student.age === 20);
  console.log(result); */
  /*   const result = students.every((student) => student.name.includes("J"));
  console.log(result); */
})();

//combinar metodos
(() => {
  const result = students
    .map(({ name, lastname, age }) => ({
      student: `${name}  ${lastname}`,
      age,
    }))
    .filter((student) => student.age > 20)
    .sort((a, b) => b.age - a.age)
    .reduce((total, student) => total + student.age, 0);

  console.log(result);
})();
