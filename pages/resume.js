import About from "../src/components/About";
import Clients from "../src/components/Clients";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { CreativePageBanner } from "../src/components/PageBanner";
import Pricing from "../src/components/Pricing";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Team from "../src/components/Team";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
const ResumeCreative = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <CreativePageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About />
      {/* Section Service */}
  
      {/* Section Resume */}
      <ResumeSection />
      {/* Section Design Skills */}
     
      {/* Section Knowledge Skills */}
      <KnowledgeSkills />
      {/* Section Interests */}
      <Interests />
      {/* Section Team */}

    
    </Layout>
  );
};
export default ResumeCreative;
