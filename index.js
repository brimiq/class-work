const studentProfile = {
  name: "Aisha",
  age: 21,
  courses: [
    {
      title: "JavaScript Basics",
      completed: true,
      scores: [85, 90, 88]
    },
    {
      title: "Web Development",
      completed: false,
      scores: [78, 82, 80]
    }
  ],
  contact: {
    email: "aisha@example.com",
    social: {
      twitter: "@aishacodes",
      github: "aisha-dev"
    }
  }
};

console.log(studentProfile.contact.social.github)
console.log(studentProfile.courses[1].scores[2])
console.log(studentProfile.courses[0].completed)
console.log(studentProfile.courses[0].title)
console.log(studentProfile.contact.email)