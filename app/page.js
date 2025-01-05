
import Terminal from "@/components/Terminal";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        droov.sh:$ <span className={styles.help}>type help to start</span>
      </h1>

      <Terminal />

      <a
        href="https://buymeacoffee.com/droovvv"
        className={styles.coffee}
        target="_blank"
        rel="noreferrer"
      >
        <Image
        src="/coffee.png"
        alt="Buy me a coffee"
        width="884"
        height="1279"
        className={styles.coffeeIcon}
        />
      </a>
    </div>
  );
}
