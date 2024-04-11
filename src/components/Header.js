import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    /* Firebase On Auth State change will be called whenever there is some change in authentication state */
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) {
          // User signed in
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        } else {
          // User signed out
          dispatch(removeUser());
          navigate("/");
        }
      }
    );

    return () => {
      unsubscribeAuthStateChanged();
    };
  }, []);

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  return (
    <div className="flex px-8 py-2 bg-gradient-to-b from-black justify-between">
      <div className="w-40">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="flex p-2 mx-3">
        {user && (
          <div className="flex items-center gap-2">
            <div className="flex-1 w-10 h-10">
              <img alt="userIcon" src={user?.photoURL} />
            </div>
            <button className="flex cursor-pointer" onClick={handleSignOut}>
              <div className="text-white font-bold flex whitespace-nowrap">
                Sign Out
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
