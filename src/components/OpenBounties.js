import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./../actions/actionHandlers";
import "./OpenBounties.css";
import { Button } from "react-bootstrap";
import DetailsModal from "./Layout/Modals/DetailsModal/DetailsModal";

const OpenBounties = () => {
  const [modalShow, setModalShow] = useState(false);
  const [person, setPerson] = useState({});
  const bounty = useSelector((state) => state.list);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getData("https://akabab.github.io/starwars-api/api/all.json"));
  }, [dispatch]);

  return (    
    <div>
  <div className="mainDiv">
  <div></div>
    <div className="outline">
      <div>
        <h1 className="openBountyHeader">Wanted List</h1>
      </div>
      <div className="parent">
        {/* Need to refactor this portion */}

        {bounty !== undefined
          ? bounty.map((person) =>
              !person.diedLocation ? (
                <div className="personDiv aliveDiv" key={person.id}>
                  <div value={person.id}>
                  <div className="darthFont">{person.name}</div>
                    <img className="mugShot" src={person.image} alt="mug_shot" height="150px"></img>
                    <div className="darthFont green">Active</div>
                  </div>
                  <Button
                    variant="info"
                    className="buttonInfo"
                    onClick={() => {
                    setModalShow(true)
                    setPerson(person)
                    }}
                  >
                    Show Details
                  </Button>
                </div>
              ) : (
                <div className="personDiv deadDiv" key={person.id}>
                <div className="darthFont">{person.name}</div>
                  <div>
                    <img className="mugShot" src={person.image} alt="mug_shot" height="150px"></img>
                  </div>
                  <div>
                    <strong className="darthFont red text">Deceased</strong>
                    <div className="darthFont red diedOn">Died on: {person.diedLocation}</div>
                  </div>
                </div>
              )
            )
          : ""}
      </div>
      <DetailsModal 
      person={person}
      show={modalShow} 
      onHide={() => setModalShow(false)} 
       />
    </div>
    <div></div>
    </div>
    </div>
  );
};

export default OpenBounties;
