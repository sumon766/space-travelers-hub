import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/dragonStyle.css';
import { dragonData, dragonBooking, CancelDragon } from '../../redux/dragons/dragonsSlice';

function Dragons() {
  const dragons = useSelector((state) => state.dragons.dragons.map((dragon) => {
    if (state.dragons.reserveDragons.some(
      (dragonsReserved) => dragonsReserved.id === dragon.id,
    )) {
      return { ...dragon, reserved: true };
    }
    return { ...dragon, reserved: false };
  }));
  const dispatch = useDispatch();
  const handlereservedButton = (id) => {
    dispatch(dragonBooking(id));
  };
  const handleCancelButton = (id) => {
    dispatch(CancelDragon(id));
  };
  useEffect(() => {
    dispatch(dragonData());
  }, [dispatch]);

  return (
    <ul>
      {
dragons.map((dragon) => (
  <li className="dragonCont" key={dragon.id}>
    <div>
      <img className="dragonimg" alt="dragons" src={dragon.flickr_images} />
    </div>
    <div className="dragonDetails">
      <h3>
        {dragon.name}
        {dragon.reserved}
      </h3>
      <h4>{dragon.type}</h4>

      <div className="container_dragons">
        {dragon.reserved && <p className="reserved">Reserved</p>}
        <p>{dragon.description}</p>
      </div>

      {!dragon.reserved && <button onClick={() => handlereservedButton(dragon.id)} className="dragonBtn" type="submit">Reserve Dragon</button> }
      {dragon.reserved && <button onClick={() => handleCancelButton(dragon.id)} className="cancelBtn" type="submit">Cancel Reservation</button> }
    </div>
  </li>
))
}

    </ul>
  );
}

export default Dragons;
