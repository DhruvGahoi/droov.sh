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

    const [cmd, ...args] = command.split(" ");
    const message = args.join(" ");

    if (command === "rm -rf /*") {
      const messages = await CONTENTS[command]();

      let progressiveOutput = "";
      const interval = 500;
      const messageList = messages.split("</p>");

      messageList.forEach((msg, index) => {
        setTimeout(() => {
          progressiveOutput += msg + "</p>";
          setCommands((prev) => [
            ...prev.slice(0, prev.length - 1),
            { command, output: progressiveOutput },
          ]);

          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, index * interval);
      });
    } else if (cmd === "cowsay") {
      const output = await CONTENTS[cmd](message);
      setCommands((prev) => [...prev.slice(0, prev.length - 1), { command, output }]);
    } else if (cmd in CONTENTS) {
      const output = await CONTENTS[cmd]();
      setCommands((prev) => [...prev.slice(0, prev.length - 1), { command, output }]);
    } else if (cmd === "clear") {
      setLoading(false);
      return setCommands([]);
    } else {
      const output = CONTENTS.error(escapeHTML(command));
      setCommands((prev) => [...prev.slice(0, prev.length - 1), { command, output }]);
    }

    setLoading(false);

    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  );
}
