import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { closeAISearchView, toggleAISearchView } from "../utils/aiSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);
  const showAISearch = useSelector((store) => store.aiSearch.showAISearch);

  useEffect(() => {
    /* Firebase On Auth State change will be called whenever there is some change in authentication state */
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) {
          // User signed in
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          location.pathname === "/" && navigate("/browse");
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
  const handleAISearchClick = () => {
    dispatch(toggleAISearchView());
  };
  const closeAISearch = () => {
    location.pathname !== "/browse" && navigate("/browse");
    dispatch(closeAISearchView());
  };

  const handleLanguageChange = (e) => {
    const language = e.target?.value;
    dispatch(changeLanguage(language));
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex px-4 py-2 bg-opacity-30 bg-gradient-to-b from-black justify-between">
      <div className="w-28 py-2">
        <img
          className="cursor-pointer"
          src={LOGO}
          alt="logo"
          onClick={closeAISearch}
        />
      </div>
      <div className="flex py-2 mx-2 text-xs">
        {user && (
          <div className="flex items-center gap-2">
            {showAISearch && (
              <select
                onChange={handleLanguageChange}
                className="py-1 px-3 bg-gray-900 text-white border-gray-700 border-2 rounded-md"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {!showAISearch && (
              <button
                className="py-1 px-3 rounded text-white bg-blue-700 flex gap-2 items-center hover:bg-opacity-60 bord"
                onClick={handleAISearchClick}
              >
                <svg
                  stroke="none"
                  fill="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  ></path>
                </svg>
                Ask AI
              </button>
            )}
            <div className="flex-1 w-8 h-8">
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
