import React, { useState, useEffect } from "react";

const MainPage = () => {
  // handle notification
  const [notification, setNotification] = useState(false);

  // handle button click
  const handleClick = () => {
    setNotification(true);
  };

//   handle timer
useEffect(() =>{
    let timer;
    if (notification) {
      timer = setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
},[notification])
  return (
    <React.Fragment>
      <main>
        <div className="h-screen centered flex-col space-y-7 md:w-6/12 md:mx-auto">
          {notification && (
            <div className="bg-green-900 w-full h-10 text-white centered">
              <p>Thank you for Clicking me !!!</p>
            </div>
          )}
          <div>
            <button
              onClick={handleClick}
              className="bg-white px-3 py-1 rounded shadow font-semibold "
            >
              click here
            </button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
