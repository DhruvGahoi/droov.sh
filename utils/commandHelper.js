import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { say } from "cowsay";
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
  // {
  //   command: "projects",
  //   description: "My Projects"
  // },
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
    //done
    command: "rm -rf /*",
    description: "At your own risk"
  },
  {
    //done
    command: "cowsay",
    description: "mooooo..."
  },
  {
    //done
    command: "clear",
    description: "Clear terminal"
  }
];

export const CONTENTS = {
  help: () => COMMANDS.map(
    (command) => `<div style="display: flex; justify-content: space-between;">
    <p style="font-size: 15px">${command.command}</p>
    <p>${command.description}</p>
    </div>`
  ).join("") +
  `<br />`,

  whoami: () => `My name is Dhruv. I am ${getAge("December 12, 2004")}
  and I'm a full stack web developer with a little grip over DataStructures and
  Algorithms. I mean its for fun ig...
  <br /><br />
  I love coding in Javascript, Typescript and C/C++, and have worked with the frameworks like ReactJS, NextJS, ExpressJS and
  MongoDB. I am currently learning Devops, if you can help me learning in any of these, do let me know!!
  <br /><br />
  I just shifted to linux, will be sharing my experience and dotfiles <a href="https://github.com/DhruvGahoi" target="_blank">here</a>
  <br /><br />
  I also eagerly takes part in various hackathons happening around :)!!
  `,

  education: () => `I completed my schooling from <a href="https://bkdaldrichpublicschool.org.in/" target="_blank">Aldrich Public School, Orai</a>
  and a pre final year student at <a href="https://vitbhopal.ac.in/" target="_blank">Vellore Institute of Technology.</a>`,

  skills: () => `I am experienced with C/C++, Javascript and Typescript and some other web technologies dominating at the time : <br />
    <div class="skill"><b>core</b>: HTML, CSS, Node.js<br /></div>
    <div class="skill"><b>frameworks</b>: React, NextJS and Express<br /></div>
    <div class="skill"><b>database</b>: MongoDB and PostgreSQL<br /></div>
  `,

  // projects: getProjects,

  contact: () => `
    <div
      <p>If you'd like to get in touch with me, feel free to reach out through any of the following:</p>
        <a href="mailto:dhruvvgahoi@gmail.com" target="_blank">
          <FaEnvelope style="font-size: 15px; margin-right: 10px;" />
          Email
        </a>

        <a href="https://github.com/DhruvGahoi" target="_blank">
          <FaGithub style="font-size: 15px; margin-right: 10px;" />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/dhruv-gahoi/" target="_blank">
          <FaLinkedin style="font-size: 15px; margin-right: 10px;" />
          LinkedIn
        </a>

        <a href="https://twitter.com/droovvv" target="_blank">
          <FaTwitter style="font-size: 15px; margin-right: 10px;" />
          Twitter
        </a>
      <p>Looking forward to connecting with you!</p>
    </div>
  `,

  resume: () => {
    window.open("https://drive.google.com/file/d/1Mr5JHCe2zPqgNRiJWuqoR0dNs_ExyaWI/view?usp=sharing", "_blank");
    return "Opening resume in a new tab...";
  },

  'rm -rf /*': () => {
    return new Promise((resolve) => {
      const messages = [
        "Deleting /important/files...",
        "Removing /system32...",
        "Oops, there goes the internet...",
        "Downloading cat videos for safe-keeping...",
        "Erasing self-awareness...",
        "Just kidding! I’m still here.",
      ];

      let output = "";
      const interval = 1000;

      messages.forEach((msg, index) => {
        setTimeout(() => {
          output += `<p>${msg}</p>`;
          if (index === messages.length - 1) {
            resolve(output);
            setTimeout(() => {
              // Add a message as a fallback for browsers that block window.close()
              alert("This session has self-destructed. Please close this tab manually.");
            }, 2000);
          }
        }, index * interval);
      });
    });
  },

  cowsay: (message) => {
    const text = message && message.trim() !== "" ? message : "Moo!";
    const output = say({
      text,
      e: "oo",
      T: "U ",
    });
    return `<pre style="font-family : monospace; white-space: pre-wrap;">${output}</pre>`;
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
