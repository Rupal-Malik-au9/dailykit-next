import React from "react";
import Image from "next/image";
const SmallPara = (props) => {
  return props.smallPara.map((smallPara) => {
    return (
      <>
        {smallPara.description ? (
          <>
            {smallPara.description}
            <Image
              width="400px"
              height="420px"
              src={smallPara.image}
              alt="smallParaImage"
              className="startAMealImage"
            />
          </>
        ) : (
          smallPara
        )}
        <br />
        <br />
      </>
    );
  });
};
export default SmallPara;
