import Header from "./Header";
import SectionTwo from "./SecetionTwo";
import Section3 from "./Section3"
import Header2 from "./Header2";
import Section4 from "./Section4";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header/>
      <SectionTwo/>
      <Header2/>
      <Section3/>
      <Section4/>
      
    </div>
  );
}
