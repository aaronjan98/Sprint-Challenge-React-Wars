import React, { useState, useEffect} from "react";
import axios from "axios";
import CharCard from './CharCard';

function CharList(){
    const [charInfo, setCharInfo] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/?format=json`)
          .then(response => {
            console.log(response.data);
            setCharInfo(response.data);
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);

      return (
        <div className="char-container">
              <CharCard
               // key={charInfo.service_version}
                name={charInfo.name}
                height={charInfo.height}
                mass={charInfo.mass}
                hairColor={charInfo.hair_color}
              />
        </div>
      );
}

export default CharList;