import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MissionsData, joinMission, leaveMission } from '../../redux/missions/missionSlice';
import '../styles/missions.css';

function Missions() {
  const displayMissionData = useSelector((state) => state.Mission.Missions.map((mission) => {
    if (state.Mission.joinedMissions.some(
      (joinedMission) => joinedMission.mission_id === mission.mission_id,
    )) {
      return { ...mission, joined: true };
    }
    return { ...mission, joined: false };
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MissionsData());
  }, [dispatch]);

  const handleJoinButton = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveButton = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="missions-area">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join/Leave Mission</th>
          </tr>
        </thead>
        <tbody>
          {displayMissionData.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              {mission.joined && <td><span>Active member</span></td>}
              {!mission.joined && <td><span>Not a member</span></td>}
              {!mission.joined && <td><button type="button" onClick={() => handleJoinButton(mission.mission_id)}>Join Mission</button></td>}
              {mission.joined && <td><button type="button" onClick={() => handleLeaveButton(mission.mission_id)}>Leave Mission</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
