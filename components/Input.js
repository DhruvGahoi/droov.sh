"use client"

import { useState } from "react"

export default function Input({command, onSubmit }){
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  }

  return (
    <form>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
        <span style={{ color: "var(--primary)" }}>~</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
      type="text"
      className="bg-transparent border-0 outline-none pl-1.5 text-[var(--text-color)] min-w-[calc(100%-100px)"
      value={_command}
      onChange={(e) => setCommand(e.target.value)}
      disabled={command ? true : false}
      ref={(input) => input && !command && input.focus()}
      autoFocus={command === ""}
      />
    </form>
  )
}
