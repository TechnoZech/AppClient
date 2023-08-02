import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

		//Fetching current user from server
		const [userObject, setUserObject] = useState();

		useEffect(() => {
			axios
				.get("http://localhost:8080/getuser", { withCredentials: true })
				.then((res) => {
                    // console.log(res);
                    if (res.data) {
                        // console.log(res);
						setUserObject(res.data);
					}
				});
		}, []);

    console.log(userObject.name);
  return (
    <section className='bg-blue2 px-[5%] h-screen'>
        {/* <div className='flex flex-col h-screen items-center justify-center text-center'>
            <h1 className='text-dark font-bold text-xl lg:text-4xl'> <span className='text-blue'> Hi {userObject.name},</span> How are you doing?</h1>
            <div className='flex flex-col items-center justify-center bg-blue p-5 rounded-lg'>
                <img src={userObject.thumbnail} alt="profile" />
                <p>{userObject.name}</p>
                <p>{userObject.username}</p>
            </div>
            <a href="/">Logout</a>
        </div> */}
    </section>
  )
}

export default Profile;