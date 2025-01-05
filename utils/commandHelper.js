const os = require("os");

// sl, cowsay

const COMMANDS = [
  {
    //done
    command: "about",
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
    //done
    command: "whoami",
    description: "About you"
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

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML = `<h3>My Projects</h3>` +
    projects.map((pj) => `<div class="command">
      <a href="${pj.name}" target="_blank"><b class="command">${pj.name}</b>
      </a> - <b>${pj.stack.join(", ")}</b>
      <p class="meaning">${pj.description}</p>
      </div>`)
      .join("");
  return projectHTML;
}

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

const getWhoAmI = () => {
  const username = os.userInfo().username;
  const hostname = os.hostname();
  const platform = os.platform();

  const descriptions = [
    `You are ${username}, the digital voyager, navigating through the realms of ${platform}.`,
    `Ah, ${username}! The master of ${hostname}, wielder of infinite wisdom.`,
    `A legend appears: ${username}, conqueror of ${platform} and ruler of this terminal!`,
    `Greetings, ${username}. This terminal is humbled by your commanding presence.`,
    `${username}, the architect of this digital playground. ${platform} is your canvas, and code your art.`,
    `Welcome back, ${username}. The circuits of ${hostname} have been waiting for you.`,
  ];

  // Select a random description
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];

  // Render as an HTML-like string using Tailwind CSS
  return `
    <div class="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-semibold text-green-400">Who Am I?</h1>
      <p class="text-lg text-gray-300">${randomDescription}</p>
    </div>
  `;
};


export const CONTENTS = {
  help: () => COMMANDS.map(
    (command) => `<div style="display: flex; justify-content: space-between;">
    <p style="font-size: 15px">${command.command}</p>
    <p>${command.description}</p>
    </div>`
  ).join("") +
  <br />,

  about: () => `My name is Dhruv. I am ${getAge("December 12, 2004")}
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

  projects: getProjects,

  contact: getContacts,

  resume: () => {
    window.open("https://drive.google.com/file/d/1Mr5JHCe2zPqgNRiJWuqoR0dNs_ExyaWI/view?usp=sharing", "_blank");
    return "Opening resume in a new tab...";
  },

  hymn: () => `<div>Find me vibing <a href="https://open.spotify.com/playlist/0UeDYh6qnzp8CgM8mK9G3b?si=2078466155b344c4" target="_blank">here</a>`,

  whoami: getWhoAmI,

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
