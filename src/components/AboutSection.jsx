// src/components/AboutSection.jsx
import ReadMoreButton from "./ReadMoreButton";

const shortText =
  "My personal favorite trucks of all time the 1969 to 1972 Chevrolet C/10 and K/10 shortbox fleetsides.  This is my journey restoring this classic. Growing up next to my skilled father in the garage, I developed skills in painting, welding, mechanics and basic bodywork enabling me to maintain and repair my own vehicles.";

const fullText =
  "These trucks are getting harder to find and when you do they are usually in pretty bad shape, and way overpriced for their condition.  I searched for several years to find the right truck to restore.  This one was in good shape for my plans.";

const AboutSection = () => {
  return (
    <section id='project' className="flex flex-col md:flex-row w-full h-auto py-24 px-4 bg-slate-950">
      {/* Left Section: Image and Text */}
      <div className="md:w-2/5 w-full mb-8 md:mb-0 animate-fade-right">
        <img
          id="project"
          src="/img/truck-2-min.png"
          alt="About us"
          className="w-full h-full object-cover rounded-lg shadow-lg "
        />
      </div>
      <div className="md:w-2/5 w-full md:ml-8 flex flex-col justify-center border-l border-sky-400 ml-4">
        <div className="">
          <h2 className="text-4xl  text-gray-400 font-semibold mb-4 ">
            My <span className="text-sky-400">Project</span>
          </h2>
        </div>

        <p className="text-lg text-gray-300 mb-6">
          <ReadMoreButton shortText={shortText} fullText={fullText}/>
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-3/5 w-full mt-8 md:mt-0 rounded-lg mr-6" data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in">
        <img
          src="/img/7.JPG"
          alt="About us"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
