import React, { useState } from "react";
import PartListColumn from "./PartListColumn"; 
import { GoTools } from "react-icons/go";

const TogglePartList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const TogglePartList = () => {
    setIsOpen(!isOpen);
  };

  // Static list of items for each column
  const column1Items = [
    "General Grabber UHP tires",
    "17 in American Outlaw Polished Rims",
    "New Front disc brakes",
    "Western 2 1/2 in. drop spindles",
    "Moog control arm bushings",
    "Ball joints",
    "Belltech Nitro drop shocks",
    "Tie rods",
    "2 1/2 in. rear drop coils",
    "2 in. drop blocks",
    "New rear shock mounts",
    "New rear wheel wells",
    "License plate light",
    "Chrome transmission pan",
    "Speedometer cable and gear"
  ];

  const column2Items = [
    "Toneau cover",
    "Lettered tailgate",
    "Chrome tailgate handle",
    "Custom tailgate truunion",
    "Carriage bolts (bed floor)",
    "Front and rear side markers with gaskets",
    "Headlights",
    "Outside door handles",
    "Locks with gaskets",
    "Gas cap",
    "Side emblems",
    "Windshield wipers",
    "side mirrors",
    "8mm spark plug wires",
    "Aluminum power steering brackets"
  ];

  const column3Items = [
    "Door weatherstripping",
    "Door latch driver side",
    "Door lock knobs",
    "Window roller handles",
    "Inside door handles",
    "Custom rocker plates",
    "Visors and hardware",
    "Dashpad",
    "Instrement panel bazel",
    "Headlight switch",
    "Dash switch knobs",
    "Tachometer",
    "Rear view mirror",
    "Chrome power steering pump",
    "Chrome chevy valve covers"
  ];

  const column4Items = [
    "Ignition switch",
    "Brake switch",
    "Billit e brake handle",
    "Custom guages",
    "Gas and brake pedals",
    "Fat mat sound deadening",
    "Gas tank",
    "Sending unit",
    "Kenwood stereo",
    "Chrome tilt steering column",
    "Steering wheel",
    "Steering column support brackets",
    "Steering wheel adapter",
    "Chrome high output alternator",
    "Chrome air cleaner"
  ];

  const column5Items = [
    "Steering shaft",
    "Shaft coupler",
    "Rag joint",
    "Steering column grommets",
    "Tinted windows",
    "Autowire wiring kit",
    "Chevy Radiator Cap",
    "New radiator",
    "5/16 steel fuel lines",
    "Fuel pump",
    "Mini torque starter",
    "New Hoses and belts",
    "New wing window handle",
    "Holley 650 Street Avenger carb",
    "Chrome Chevrolet Valve covers"
  ];

  return (
    <div className="h-auto bg-slate-950 pt-20">
      <div className="w-4/5 mx-auto py-1 flex flex-col items-center m-auto">
        <div className="w-3/4 flex items-center flex-col justify-center m-4 pt-10 ">
          <h2 className="text-4xl  text-gray-400 font-semibold mb-4">
            The Parts <span className="ml-1 text-4xl text-sky-400">List</span>
          </h2>
          <p className="text-gray-200 "></p>
        </div>

        <button
          className="w-full mb-4 p-4 flex items-center justify-center border border-sky-400  text-gray-300 font-semibold rounded-md cursor-pointer hover:bg-slate-900"
          onClick={TogglePartList}
        ><GoTools className="mr-4 text-2xl"/>
          {isOpen ? "Hide Parts" : "Show Parts"}
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            <PartListColumn items={column1Items}  />
            <PartListColumn items={column2Items} />
            <PartListColumn items={column3Items} />
            <PartListColumn items={column4Items} />
            <PartListColumn items={column5Items} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TogglePartList;

