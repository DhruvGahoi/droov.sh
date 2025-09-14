import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { say } from "cowsay";
export const COMMANDS = [
  {
    //done
    command: "whoami",
    description: "About Me",
  },
  {
    //done
    command: "education",
    description: "My Education",
  },
  {
    //done
    command: "skills",
    description: "my skills",
  },
  {
    command: "projects",
    description: "my projects"
  },
  {
    //done
    command: "resume",
    description: "my resume",
  },
  {
    command: "socials",
    description: "connect with me",
  },
  {
    //done
    command: "hymn",
    description: "groove with me",
  },
  {
    //done
    command: "rm -rf /*",
    description: "At your own risk",
  },
  {
    //done
    command: "cowsay",
    description: "mooooo...",
  },
  {
    //done
    command: "clear",
    description: "clear terminal",
  },
];

const PROJECTS_LIST = [
  {
    title: "FileGo",
    link: "https://filego-tau.vercel.app/",
    description: "SaaS that allows users to upload files and get the sharable download URLs"
  },
  {
    title: "Aether",
    link: "https://github.com/DhruvGahoi/aether",
    description: "Compiler for C, built in C."
  },
  {
    title: "Qualysis",
    link: "https://github.com/DhruvGahoi/qualysis",
    description: "Platform designed to streamline every aspect of your hiring process"
  },
  {
    title: "Planit",
    link: "https://github.com/DhruvGahoi/planit",
    description: "Platform for managing your all events."
  }
]

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) =>
        `<div style="display: flex; justify-content: space-between;">
    <p style="font-size: 15px">${command.command}</p>
    <p>${command.description}</p>
    </div>`,
    ).join("") +
    `<br />`,

  whoami: () =>
    `Hello I'm Dhruv, ${getAge("December 12, 2004")}
    and I'm a full stack web developer with a little grip over DataStructures and
    Algorithms. Love to play contests!!
    <br /><br />
    I'm a Linux and (coffee) enthusiast and love fidgeting around with the stuffs.
    <br /><br />
    I also love to take part in hackathons happening around :) and in my free time, playing CTFs for fun!!
  `,

  education: () =>
    `I completed my schooling from <a href="https://bkdaldrichpublicschool.org.in/" target="_blank">Aldrich Public School</a>
    and a final year student at <a href="https://vitbhopal.ac.in/" target="_blank">Vellore Institute of Technology.</a>`,

    skills: () =>
      `<div class="skill">
          <span style="font-weight: bold; font-size: 16px; color: #4ea1f3;">Languages</span>: 
          C/C++, Typescript, Javascript, Python, Rust(newbie)<br />
       </div>
       <div class="skill">
          <span style="font-weight: bold; font-size: 16px; color: #4ea1f3;">Frameworks</span>: 
          React, NextJS, Express<br />
       </div>
       <div class="skill">
          <span style="font-weight: bold; font-size: 16px; color: #4ea1f3;">Tools</span>: 
          Git, Docker, PostgreSQL, MongoDB, MySQL, Redis<br />
       </div>
       <div class="skill">
          <span style="font-weight: bold; font-size: 16px; color: #4ea1f3;">Devops</span>: 
          AWS EC2, AWS S3, AWS IAM, AWS EKS<br />
       </div>`,
    

  projects: () => {
    return PROJECTS_LIST.map(
      (proj) => `
        <div style="border: 1px solid #888; border-radius: 8px; padding: 10px; margin: 8px 0;">
          <a href="${proj.link}" target="_blank" style="font-weight: bold; font-size: 16px; color: #4ea1f3; text-decoration: none;">
            ${proj.title}
          </a>
          <p style="margin: 5px 0 0 0; font-size: 14px;">${proj.description}</p>
        </div>
      `
    ).join("");
  },
  

  socials: () => `
    <div
      <p>Reach out through any of the following:</p>
        <a href="mailto:dhruvvgahoi@gmail.com" target="_blank">
          <FaEnvelope style="font-size: 15px; margin-right: 10px;" />
          Email
        </a>
        <br>
        <a href="https://github.com/DhruvGahoi" target="_blank">
          <FaGithub style="font-size: 15px; margin-right: 10px;" />
          GitHub
        </a>
        <br>
        <a href="https://www.linkedin.com/in/dhruv-gahoi/" target="_blank">
          <FaLinkedin style="font-size: 15px; margin-right: 10px;" />
          LinkedIn
        </a>
        <br>
        <a href="https://x.com/DhruvvGahoi" target="_blank">
          <FaTwitter style="font-size: 15px; margin-right: 10px;" />
          Twitter
        </a>
      <p>Looking forward to connecting with you!</p>
    </div>
  `,

  resume: () => {
    window.open(
      "https://drive.google.com/file/d/1ZvDfTF4UW32CxsN2w7AUa2EV2_pobpXR/view?usp=drive_link",
      "_blank",
    );
    return "Opening resume in a new tab...";
  },

  "rm -rf /*": () => {
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
              alert(
                "This session has self-destructed. Please close this tab manually.",
              );
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

  hymn: () =>
    `<div>Find me vibing <a href="https://open.spotify.com/playlist/0UeDYh6qnzp8CgM8mK9G3b?si=2078466155b344c4" target="_blank">here</a>`,

  error: (input) =>
    `<div className="help-command" style="color: red;">sh: Unknown Command : ${input}</div>`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
