"use client";

import { useState, useRef } from "react";
import styles from "./Input.module.css";
import { COMMANDS } from "@/utils/commandHelper";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command || "");
  const inputRef = useRef(null);

  const matchesRef = useRef([]);     
  const matchIndexRef = useRef(0);    

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = _command.trim();

    matchesRef.current = [];
    matchIndexRef.current = 0;

    setCommand("");
    onSubmit(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const value = _command;

      if (matchesRef.current.length > 0) {
        matchIndexRef.current =
          (matchIndexRef.current + 1) % matchesRef.current.length;
        setCommand(matchesRef.current[matchIndexRef.current]);
        placeCaretAtEnd();
        return;
      }

      const pool = COMMANDS.map((c) => c.command);
      const matches = pool.filter((cmd) => cmd.startsWith(value));

      if (matches.length === 0) return;

      if (matches.length === 1) {
        setCommand(matches[0]);
        placeCaretAtEnd();
      } else {
        matchesRef.current = matches;
        matchIndexRef.current = 0;
        setCommand(matchesRef.current[0]);
        placeCaretAtEnd();
      }
    }
  };
  const placeCaretAtEnd = () => {
    requestAnimationFrame(() => {
      const el = inputRef.current;
      if (el) {
        const len = el.value.length;
        el.selectionStart = len;
        el.selectionEnd = len;
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
        <span style={{ color: "var(--primary)" }}>~</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
        id="command"
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => {
          setCommand(e.target.value);
          matchesRef.current = [];
          matchIndexRef.current = 0;
        }}
        onKeyDown={handleKeyDown}
        disabled={!!command}
        ref={(el) => {
          inputRef.current = el;
          if (el && !command) el.focus();
        }}
        autoFocus={command === ""}
      />
    </form>
  );
}
