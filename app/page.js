
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col justify-center h-screen max-w-[600px] mx-auto">
      <h1>
        droov.sh:$
        <span style={{color: "#a9b1d6"}}>type help to start</span>
      </h1>

      {/* <Terminal /> */}

      <a
        href="https://buymeacoffee.com/droovvv"
        className="fixed bottom-5 right-5 w-16 h-16 z-[1000] bg-yellow-400
        items-center justify-center rounded-full"
        target="_blank"
        rel="noreferrer"
      >
        <Image
        src="/coffee.png"
        alt="Buy me a coffee"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}
