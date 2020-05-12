import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./DetailsModal.css";
import { API } from "aws-amplify";
import { onError } from "../../../../libs/errorLib";

const DetailsModal = (props) => {
  const {
    name,
    image,
    gender,
    homeworld,
    eyeColor,
    skinColor,
    species,
    affiliations
  } = props.person;

  const onAdd = async () => { 
    try {
      console.log(props.person)
      await addBounty(props.person);
      props.onHide();
    } catch (e) {
      onError(e);
      //setIsLoading(false);
    }
  }
  
  function addBounty(bounty) {
    return API.post("bounties", "/bounties", {
      body: bounty
    });

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="modalProperties modalName">{name}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalParent">
          <div>
            <img className="mugShot modalImage" src={image} alt="mugshot" />
          </div>
          <div className="modalDiv2 modalProperties">
            <div>
              Gender:<span className="modalResponse"> {gender}</span>
            </div>
            <div>
              Home World:<span className="modalResponse"> {homeworld}</span>
            </div>
            <div>
              Eye Color:<span className="modalResponse"> {eyeColor}</span>
            </div>
            <div>
              Skin Color:<span className="modalResponse"> {skinColor}</span>
            </div>
            <div>
              Species:<span className="modalResponse"> {species}</span>
            </div>
            <div>affiliations:</div>
            <span className="modalResponse">
            {/* Got to fix this later */}
            {
              affiliations ? affiliations.map( team => <div key={team}> {team} </div> ) : "No Affiliation"
            }
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onAdd}>Add to Bounty List</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
