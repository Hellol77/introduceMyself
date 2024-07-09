import Intro from "@/components/Intro";
import { Pretendard } from "@/styles/fonts/font";

export default function Home() {
  return (
    <main
      className={`w-full flex flex-col items-center ${Pretendard.className}`}
    >
      <Intro />
    </main>
  );
}
