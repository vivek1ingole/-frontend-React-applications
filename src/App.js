// App.js
import React, { useState, useEffect } from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container  bg-gray-400">
      <h1 class=" pt-6 text-5xl font-bold text-center text-blue-700  underline underline-offset-4">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
