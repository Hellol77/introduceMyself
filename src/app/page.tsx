import BestExperience from "@/components/BestExperience";
import EuropeTravel from "@/components/EuropeTravel";
import Hobby from "@/components/hobby/Hobby";
import Intro from "@/components/Intro";
import Major from "@/components/Major";
import MBTI from "@/components/MBTI";
import Plan from "@/components/plan/Plan";
import { Pretendard } from "@/styles/fonts/font";

export default function Home() {
  return (
    <main
      className={`w-full flex flex-col justify-center items-center ${Pretendard.className} gap-80`}
    >
      <Intro />
      <Major />
      <MBTI />
      <BestExperience />
      <EuropeTravel />
      <Hobby />
      <Plan />
    </main>
  );
}
