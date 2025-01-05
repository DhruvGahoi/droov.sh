// sl, cowsay
const COMMANDS = [
  {
    //done
    command: "whoami",
    description: "About Me"
  },
  {
    //done
    command: "education",
    description: "My Education"
  },
  {
    //done
    command: "skills",
    description: "My Skills"
  },
  {

    command: "projects",
    description: "My Projects"
  },
  {
    //done
    command: "resume",
    description: "My Resume"
  },
  {
    command: "contact",
    description: "Contact Me"
  },
  {
    //done
    command: "hymn",
    description: "Groove with me"
  },
  {
    command: "rm -rf /*",
    description: "At your own risk"
  },
  {
    command: "clear",
    description: "Clear terminal"
  }
]

export const CONTENTS = {
  help: () => COMMANDS.map(
    (command) => `<div style="display: flex; justify-content: space-between;">
    <p style="font-size: 15px">${command.command}</p>
    <p>${command.description}</p>
    </div>`
  ).join("") +
  <br />,

  whoami: () => `My name is Dhruv. I am ${getAge("December 12, 2004")}
  and I\,m a full stack web developer with a little grip over DataStrutures and
  Algorithms.
  <br /><br />
  I love coding in Javascript, Typescript and C/C++, and have worked with the frameworks like ReactJS, NextJS, ExpressJS and
  MongoDB. I am currently learning Devops, if you can help me learning in any of these, do let me know!!
  <br /><br />
  I also do somewhat of DSA just for fun!!
  <br /><br />
  I just shifted to linux, will be sharing my experience and dotfiles <a href="https://github.com/DhruvGahoi" target="_blank">here</a>
  <br /><br />
  I also eagerly takes part in various hackathons happening around :)!!
  `,

  education: () => `I completed my schooling from <a href="https://bkdaldrichpublicschool.org.in/" target="_blank">Aldrich Public School, Orai</a>
  and a pre final year student at <a href="https://vitbhopal.ac.in/" target="_blank">Vellore Institute of Technology.</a>`,

  skills: () => `I am experienced with C++, Javascript and Typescript and some other web technologies dominating at the time : <br />
    <div class="skill"><b>core</b>: HTML, CSS, Node.js<br /></div>
    <div class="skill"><b>frameworks</b>: React, NextJS, and Express<br /></div>
    <div class="skill"><b>database</b>: MongoDB, PostgreSQL, and MySQL<br /></div>
  `,

  // projects: getProjects,

  // contact: getContacts,

  resume: () => {
    window.open("https://drive.google.com/file/d/1Mr5JHCe2zPqgNRiJWuqoR0dNs_ExyaWI/view?usp=sharing", "_blank");
    return "Opening resume in a new tab...";
  },



  hymn: () => `<div>Find me vibing <a href="https://open.spotify.com/playlist/0UeDYh6qnzp8CgM8mK9G3b?si=2078466155b344c4" target="_blank">here</a>`,

  error: (input) => `<div className="help-command">sh: Unknown Command : ${input}</div>`
}

function getAge(dateString){
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
