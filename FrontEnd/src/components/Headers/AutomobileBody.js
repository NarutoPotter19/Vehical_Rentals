import React from "react";
import AutomobileCard from "./AutomobileCard";
import axios from "axios";
import useOnline from "../../utils/useOnline";
import Shimmer from "./Shimmer";
import Carousel from "../automobiles/carousel";

const AutomobileBody = () => {
  const apiLink = "http://localhost:5043/api/Cars";

  const [automobiles, setAutomobiles] = React.useState([]);

  React.useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    try {
      const response = await axios.get(apiLink);
      setAutomobiles(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const offline = useOnline();
  if (!offline) {
    return (
      <h1 className="text-5xl">Your are Offline please check the Internet</h1>
    );
  }


  // it is equivalent to 
  //if(automobile){
  //   if(length===0){
  //     return (<div!/>)
  //     else return <div2/>
  //   }
  // }
  return automobiles?.length === 0 ? (<>
    <Carousel/>
    <Shimmer /></>
  ) : (
    <>
      <div>
        <Carousel/>
      </div>
      <div className="justify-start" p-2 ><h1 className="font-medium text-4xl pl-7"> Need a Automobile for Rent</h1></div>
      <div className="flex flex-wrap justify-center mt-2">
        
        {automobiles.map((automobile,index) => {
           if (index > 12) {
            // eslint-disable-next-line array-callback-return
            return;
        }

          return <AutomobileCard key={automobile.CarId} {...automobile} />;
        })}
      </div>
    </>
  );
};
export default AutomobileBody;
