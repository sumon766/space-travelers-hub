import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

function Profile() {
  const joinedMissions = useSelector((state) => state.Mission.joinedMissions);
  const joinedRockets = useSelector((state) => state.Rocket.reserveRockets);
  const reservedDrag = useSelector((state) => state.dragons.reserveDragons);
  return (
    <div className="profile">
      <div className="missions">
        <h2>My Missions</h2>
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className="mission">
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        {joinedRockets.map((rockets) => (
          <div key={rockets.id} className="rockets-display">
            { rockets.name }
          </div>
        ))}
      </div>
      <div className="missions">
        <h2>My Dragons</h2>
        {reservedDrag.map((dragon) => (
          <div key={dragon.id} className="mission">
            {dragon.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
