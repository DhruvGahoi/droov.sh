"use client"

import { useState, useRef } from "react"

export default function Terminal(){
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  const addCommands = async(commands) => {
    let output;
    setLoading(true);
    setCommands([...commands, {command, output: "Loading..."}])

  }
}
