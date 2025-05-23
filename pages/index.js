// import ItemIsotope from "../src/components/ItemIsotope";
import dynamic from "next/dynamic";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexCreative = () => {
  return (
    <Layout>
      {/* Section Started */}
      <div className="section started layout-creative" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, {`I’m`} <strong>Oussama Bardich</strong>, <br/>
                Full stack Developer C#/Angular,
               PHP/Vuejs | React
              </h1>
              <div className="h-subtitles" style={{ opacity: "1" }}>
                <TypingAnimation extraClassName={"h-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      
    </Layout>
  );
};
export default IndexCreative;
