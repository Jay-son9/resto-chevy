/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BuildModal from "./BuildModal";

const ThumbnailGallery = () => {
  const images = [
    // ENGINE
    { src: "/img/original-1.webp", title:"What a mess!" , description: "First look at the 305, wiring is a mess, lots of rusted parts, wrong power steering bracket. It runs so no complaints.  I have tons of ideas already. Not much of a 305 fan but its fine for now." },
    { src: "/img/original-2.webp", title:"Power steering upgrade" , description: "The steering is terrible the pump is not working right with the brackets that are on there. The belt is slipping and squealing, this is definately going to be changed.  New alternator, brackets and hoses. The steering box is good so that will stay." },
    { src: "/img/original-3.webp", title:"Old set-up " , description: "I dont like this set up it shakes back and fourth and no way to tighten it and keep it stable, and dont want to reuse it." },
    { src: "/img/original-4.webp", title:"New stuff looking good" , description: "Pump mounted just need to  run the hose and put on the belt." },
    { src: "/img/original-5.webp", title:"Another view" , description: "These brackets are solid.  I went with the billet brackets and upgraded pump." },
    { src: "/img/original-6.webp", title:"My mancave the garage" , description: "Working on it late planning my next project." },
    { src: "/img/original-7.webp", title:"Brake booster project" , description: "Wow this thing was rusty, I think I will save it and restore it." },
    { src: "/img/original-8.webp", title:"Brake booster" , description: "I removed all the rust, found some paint that matches the truck, added some braided hose a chrome brake fluid cap, and shined up the brake lines.  I think it turned out nice." },
    { src: "/img/original-9.webp", title:"Cleaned up" , description: "Here I have a pic of the 305 lots of new stuff, wiring finished, also I made a custom heater delete plate." },
    { src: "/img/original-10.webp", title:"Another angle" , description: "A different angle of engine bay." },
    { src: "/img/original-13.webp", title:"Tear down of the 305" , description: "A look under the valve covers." },
    { src: "/img/original-14.webp", title:"Tear down of the 305" , description: "The crankshaft." },

    // BODY SUSPENSION
    { src: "/img/balljoint-1.webp", title: "Upper ball joint replacement", description: "Installing new upper ball joint, the drop spindles I am using require the 71-72 upper and lower ball joints, they are slightly different." },
    { src: "/img/balljoint-2.webp", title: "Ball joint replacement", description: "Here is a picture of some new hardware installed." },
    { src: "/img/balljoint-3.webp", title: "Lower ball joint replacement", description: "Installing new lower ball joint, this was fun,  Had to do some reseach on this. These need to be pressed in. Some of the challanges was getting the tool in there to press it in.  I had to raise it up quite a bit to  have space." },
    { src: "/img/brake-1.webp", title: "More work on the frontend", description: "The front disk brakes were ok, I wanted to go ahead and put now rotors calipers and lines on anyways. Since I am also putting on new drop spindles, my thoughts are to keep the stock hardware together for possible resuse on another future project." },
    { src: "/img/brake-2.webp", title: "The old spindles", description: "A look at the stock spindles." },
    { src: "/img/brake-3.webp", title: "Disk brake", description: "The new stuff installed now for the other side." },
    { src: "/img/controlarm-2.webp", title: "Control arm bushings", description: "Driverside control arm bushings were worn out and contibuting to the wierd steering issues the truck had, Those have been replaced also." },
    { src: "/img/controlarm-4.webp", title: "Control arm bushings", description: "A look after the replacement." },
    { src: "/img/frontshock-1.webp", title: "Front shock replacement", description: "A look at the old shock." },
    { src: "/img/frontshock-2.webp", title: "Front shock replacement", description: "I replaced old shocks with Belltech Nitro Drop shocks." },
    { src: "/img/frontshock-3.webp", title: "Front shock replacement", description: "Another angle of the new shocks." },
    { src: "/img/hoodlatch-1.webp", title: "Hoodlatch project", description: "I really enjoyed this little project that actually took a few days to do.  I wanted to restore the original. I sandblasted it to prep for powder coating." },
    { src: "/img/hoodlatch-3.webp", title: "Hoodlatch project", description: "My first time powder coating, very cool and fun to do.  It took some resaerch on how to do it and all the equipment and materials to do it." },
    { src: "/img/hoodlatch-5.webp", title: "Hoodlatch project", description: "Turned out great the finish looks awesome and extremely durable. I added the custom radiator filler panels for a clean look.  " },
    { src: "/img/hoodlatch-6.webp", title: "Hoodlatch project", description: "A good look at how the hoodlatch project turned out." },
    { src: "/img/motormount-1.webp", title: "Motor mount project", description: "Going to restore the motor mounts before I put in the new engine." },
    { src: "/img/motormount-2.webp", title: "Motor mount project", description: "Cleaned up and painted with high temperature gloss black." },

    // INSIDE
    { src: "/img/inside-1.webp", title: "Interior project", description: "Here is a look inside,  Has a nice seat and door panels but thats about it. Wiring is showing everywhere the steering wheel looks terrible.  Dash bezel is cracked and painted, it's missing knobs the only guage that works is the oil pressure and no dash lights. There is a lot of things that dont work inside here." },
    { src: "/img/inside-2.webp", title: "The rewire inside ", description: "The sight of a complete mess I need to completely redo, upgrade and add my own personal style." },
    { src: "/img/inside-3.webp", title: "The cluster", description: "I wanted to try to salvage and save as many of the original guages that I could. All the guages were removed cleaned and rewired. There was alot of rust that I had to remove and clean up as well along with a new printed circuit board to get them to work." },
    { src: "/img/inside-4.webp", title: "Interior project", description: "Fixing the dimmer swith, adding a new brake switch, and relocating the fusebox.  You can also see my custom diamond plate (you can see more in the main gallery). This is just one of my personal touches I have added." },
    { src: "/img/inside-5.webp", title: "Interior project", description: "The dashlights turned out nice way brighter than an original for sure. As nice as it turned out I wanted to add my own style so I put colored bulbs in instead. (Pictures in the main gallery of colored guages)." },
    { src: "/img/inside-6.webp", title: "Steering Wheel prioject", description: "I really did not like the steering wheel that was in the truck so I found one that I really liked and would go well with the rest of my plans for the interior." },
    { src: "/img/inside-7.webp", title: "Interior LED", description: "Another one of my customizations I installed a switch to turn on and off LED lights that I installed below the glovebox." },
    { src: "/img/inside-8.webp", title: "Interior", description: "Another look at the dash lights." },
    { src: "/img/inside-9.webp", title: "Interior project", description: "Some new floor mats to go along with new pedals. I also changed the linkage that goes to carbuerator from the gas pedal." },
    { src: "/img/inside-10.webp", title: "Interior project", description: "Custom billet emergency brake handle, also new emergency brake pedal." },
    { src: "/img/inside-11.webp", title: "Stereo project", description: "The dash was already cut from the original radio mount, it was not the best job, but gives it a little personality. I put a Kenwood in that is bluetooth capable also has a remote control so I can listen to my Amazon music or Pandora.  I fabricated a custom heater delete panel  along with a new ignition and lighter." },
    { src: "/img/inside-12.webp", title: "Door speaker and rocker plate project", description: "Installed chrome rocker plate covers with the Chevy emblem. I added new speakers to go with the stereo. I ran the speaker wire throught the door jamb with a custom rubber wire grommet like you have on neweer cars and into both doors to the speakers. " },

    // SWAP
    {src: "/img/swap-1.webp", title: "Prepping for the engine swap", description: "The 305 was never the end goal, the great thing about the chevy small block is many accessories are compatible with other small blocks, I have already upgraded power steering, alternator, fuel pump and starter while this is a hobby for me.  I decided to upgrade to a crate engine and use those new accessories on new engine. Here I am prepping to take off the hood.",},
    { src: "/img/swap-2.webp", title: "Prepping for the engine swap", description: "Another angle." },
    { src: "/img/swap-3.webp", title: "Prepping for the engine swap", description: "The hood is off with no scratches or damage." },
    { src: "/img/swap-4.webp", title: "Prepping for the engine swap", description: "Getting ready to start disconnecting things." },
    { src: "/img/swap-5.webp", title: "Prepping for the engine swap", description: "Carb, air cleaner and throttle linkage disconnected" },
    { src: "/img/swap-6.webp", title: "Prepping for the engine swap", description: "Me working at my own pace a liitle at a time adds up quickly. I make sure to take a lot of pictures of what go whrere as well as labeling parts. " },
    { src: "/img/swap-7.webp", title: "Prepping for the engine swap", description: "Exhaust, headers, fuel and transmission lines removed." },
    { src: "/img/swap-8.webp", title: "Prepping for the engine swap", description: "Moving brake booster out of the way.  I put a lift plate mainly to keep dirt out of engine." },
    { src: "/img/swap-9.webp", title: "Prepping for the engine swap", description: "Radiator removed and load leveler hooked up." },
    { src: "/img/swap-10.webp", title: "Prepping for the engine swap", description: "Another look at the 305." },
    { src: "/img/swap-11.webp", title: "Prepping for the engine swap", description: "Making sure the 2 ton engine hoist will fit." },
    { src: "/img/swap-13.webp", title: "Removing the engine", description: "Here she comes the valve covers were removed to keep them from getting damaged." },
    { src: "/img/swap-14.webp", title: "Removing the engine", description: "She's out I have to get a picture, this is my first solo engine removal." },
    { src: "/img/swap-16.webp", title: "Removing the engine", description: "Slow and steady that's a lot of weight always keep safety in mind." },
    { src: "/img/swap-17.webp", title: "Removing the engine", description: "Another look." },
    { src: "/img/transmission-1.webp", title: "Removing the transmission", description: "Goint to pull the transmission too, it has a leak that needs fixed." },
    { src: "/img/transmission-5.webp", title: "Removing the transmission", description: "Another look at transmission before I take it out." },
    { src: "/img/transmission-2.webp", title: "Removing the transmission", description: "Halfway out." },
    { src: "/img/transmission-3.webp", title: "Removing the transmission", description: "So far so good much lighter than the engine." },
    { src: "/img/transmission-4.webp", title: "Removing the transmission", description: "Looks like it's leaking out this seal." },
   
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className=" max-w-[95%] m-auto grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-10 mt-8 border-6 border-gray-600 rounded-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden rounded-lg shadow-md"
          onClick={() => openModal(image)}
        >
          <img
            src={image.src}
            alt={`thumbnail-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {selectedImage && (
        <BuildModal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ThumbnailGallery;
