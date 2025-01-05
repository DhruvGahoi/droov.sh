"use client";

import { useRef, useState } from "react";
import { CONTENTS } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const addCommand = async (command) => {
    setLoading(true);
    setCommands([...commands, { command, output: "Loading..." }]);

    if (`${command}` in CONTENTS) {
      if (command === "rm -rf /*") {
        // Progressive rendering for the rm -rf /* command
        let progressiveOutput = "";
        const messages = await CONTENTS[`${command}`](); // This is now a Promise

        const interval = 500; // 0.5 seconds per update
        const messageList = messages.split("</p>");

        for (let i = 0; i < messageList.length; i++) {
          setTimeout(() => {
            progressiveOutput += messageList[i] + "</p>";
            setCommands([
              ...commands.slice(0, commands.length),
              { command, output: progressiveOutput },
            ]);

            if (terminalRef.current) {
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
          }, i * interval);
        }

      } else {
        const output = await CONTENTS[`${command}`]();
        setCommands([...commands.slice(0, commands.length), { command, output }]);
      }
    } else if (command === "clear") {
      setLoading(false);
      return setCommands([]);
    } else {
      const output = CONTENTS.error(escapeHTML(command));
      setCommands([...commands.slice(0, commands.length), { command, output }]);
    }

    setLoading(false);

    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };




  return (
    <div className={styles.terminal} ref={terminalRef}>
      {/* <Command command="help" output="Some very long text will go in here" /> */}
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  );
}
