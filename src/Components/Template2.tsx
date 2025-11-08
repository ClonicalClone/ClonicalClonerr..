/* eslint-disable */

import SpotlightCard from "./Spotlight";

const Template2 = (parms: any) => {
  return (
    <SpotlightCard className="custom-spotlight-card bg-black! cursor-pointer hover:scale-105 duration-300 hover:transition hover:duration-500" spotlightColor="rgba(255, 255, 255, 0.2)">
   
      <div className="w-20 h-20 bg-black border mb-10 border-white [box-shadow:0px_0px_200px_0px_white] text-black rounded-full flex items-center justify-center mb-4 z-10">
        {parms.icon}
      </div>
      <h2 className="font-semibold text-xl text-white mb-7 from-neutral-600">{parms.name}</h2>
      <p className="text-white text-center">{parms.dp}</p>
    </SpotlightCard>
  );
};

export default Template2;
