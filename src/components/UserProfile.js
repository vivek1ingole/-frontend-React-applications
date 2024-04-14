// UserProfile.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faBuilding, faUser, faMapMarker  } from '@fortawesome/free-solid-svg-icons';


const UserProfile = ({ user }) => {
  const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`;

  return (
    <div className='drop-shadow-md m-14 rounded-2xl bg-slate-50 overflow-hidden '>
  <div className="px-4 sm:px-0 bg-slate-200">
     <div className="flex items-center justify-center drop-shadow-md  rounded-lg mb-4 overflow-hidden ">
          <img className="w-25 h-40 rounded-full pt-6" src={avatarUrl} alt={user.username} />
     </div>
  </div>
  <div className=" border-t border-gray-100 pl-4">
    <dl className="divide-y divide-gray-100">
      <div className="px-2 py-1 flex space-x-4 ">
        <dt > <FontAwesomeIcon icon={faUser} className='h-6 w-6 cursor-pointer' /></dt>
        <dd className="font-bold mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
      </div>
      <div className="px-2 py-1 flex space-x-4">
        <dt> <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6 cursor-pointer' /></dt>
        <dd className="font-bold mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
      </div>
      <div className="px-2 py-1 flex space-x-4">
        <dt><FontAwesomeIcon icon={faPhone} className='h-6 w-6 cursor-pointer' /></dt>
        <dd className="font-bold mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.phone}</dd>
      </div>
      <div className="px-2 py-1 flex space-x-4">
        <dt> <FontAwesomeIcon icon={faMapMarker} className='h-6 w-6 cursor-pointer' /></dt>
        <dd className="font-bold mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode}</dd>
      </div>
      <div className="px-2 py-1 flex space-x-4">
        <dt> <FontAwesomeIcon icon={faBuilding} className='h-6 w-6 cursor-pointer' /></dt>
        <dd class=" font-bold mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.company.name}</dd>
      </div>
      <div className="px-2 py-1 flex space-x-4">
        <dt> <FontAwesomeIcon icon={faGlobe} className='h-6 w-6 cursor-pointer ' /></dt>
        <dd className=" cursor-pointer font-bold mt-1 text-sm leading-6 text-blue-700 sm:col-span-2 sm:mt-0 underline underline-offset-4">{user.website}</dd>
      </div>
      
                
            
            
          
     
    </dl>
  </div>
</div>
  );
};

export default UserProfile;
