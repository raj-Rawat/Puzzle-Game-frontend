import React from 'react';
import Table from 'react-bootstrap/Table'

function UserTable({ users }) {
  // sort the users by score
  users.sort((a, b) =>{
    if(a.score===b.score){
      const AccuracyA = (a.total_attempted - a.wrong_attempted)/a.total_attempted;
      const AccuracyB = (b.total_attempted - b.wrong_attempted)/b.total_attempted;
      return AccuracyB - AccuracyA;
    }
    return b.score - a.score;
  });
  return (
     <div  className='container table-responsive-sm mt-3'>
        <Table style={{fontSize: "0.7rem"}} className ="table table-dark table-hover  " striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Score</th>
          <th>Total Attempt</th>
          <th>Correct Attempt</th>
          <th>Accuracy</th>
          {/* <th>Duration</th> */}
        </tr>
      </thead>
      <tbody>
        
        {users.map((user, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
                <td>{user.total_attempted}</td>
                <td>{user.total_attempted - user.wrong_attempted}</td>
                {/* const Accuracy = (res.data.total_attempted - res.data.wrong_attempted)/res.data.total_attempted; */}
                <td>{ user.total_attempted===0? '0.00' :(((user.total_attempted-user.wrong_attempted)/user.total_attempted).toFixed(4))*100}%</td>
                {/* <td>{(Date(user.end_time)-Date(user.start_time))/1000}</td> */}
            </tr>
        ))}

      </tbody>
    </Table>
     </div>
  );
}

export default UserTable;
