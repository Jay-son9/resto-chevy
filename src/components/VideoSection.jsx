// src/components/VideoSection.jsx
import React from 'react';
import { IoVideocamOutline } from "react-icons/io5";

const VideoSection = () => {
  return (

    <section id="videos" className=" m-auto flex flex-col md:flex-row items-center  bg-slate-950 p-12" >

      <div className=" flex flex-col justify-center md:w-2/5 w-full p-4 mb-8 md:mb-0 border-l border-sky-400"><IoVideocamOutline className="text-4xl text-sky-400 mb-4 ml-2"/>
        <h2 className="flex  items-center justify-center text-4xl font-semibold mb-4 ml-2 text-gray-400">Watch <span className="text-sky-400 ml-2">Videos</span></h2>
        <p className="text-lg text-gray-300">
          Here I have a few videos of different stages of the build, more to come.....
        </p>
      </div>

      <div className="md:w-3/5 w-full grid grid-cols-1 sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto p-4  border border-gray-600 rounded-lg " >
         
        <div className="bg-black rounded-lg overflow-hidden">
          <video 
          src="/img/trk_vid.mp4"
          controls
          muted
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
          />
        </div>
    
        <div className="bg-black rounded-lg overflow-hidden">
        <video 
          src="/img/trk_vid2.mp4"
          controls
          muted
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
          />
        </div>

        <div className="bg-black rounded-lg overflow-hidden">
        <video 
          src="/img/trk_vid3.mp4"
          controls
          muted
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
