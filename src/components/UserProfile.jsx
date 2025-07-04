import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import myavatar from '../data/myavatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();
    const { handleClick} = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
                    
         <button 
          type="button"
         onClick={()=> handleClick(false)} 
          style={{color: 'rgb(153, 171, 180)',
          borderRadius: '50%' 
          }}
         className="text-2xl p-3 hover: drop-shadow-xl hover:bg-light-gray"
         >
          <MdOutlineCancel/>
       </button>
                      
        
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={myavatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Aakanshi Malik </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> React-developer   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> aakanshimalik54@gmail.com </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">User ID: CT_CSI_RJ_5050</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
