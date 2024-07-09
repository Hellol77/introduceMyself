import Intro from "@/components/Intro";
import Major from "@/components/Major";
import MBTI from "@/components/MBTI";
import { Pretendard } from "@/styles/fonts/font";

export default function Home() {
  return (
    <main
      className={`w-full flex flex-col justify-center items-center ${Pretendard.className} gap-80`}
    >
      <Intro />
      <Major />
      <MBTI />
    </main>
  );
}
