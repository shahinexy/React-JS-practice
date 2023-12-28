const App = () => {
  const mark = 85;
  const arryMap = ["Shahin", "Shifat", "Kholil", "Rifat"];

  {
    /* If else codion (loop)  */
  }
  function loginStatusbtn(status) {
    if (status == true) {
      return <button>Log out</button>;
    } else {
      <button>Log in</button>;
    }
  }

  {
    /* Switch condition */
  }
  const status = true;

  return (
    <div>
      {/* Tarnary oparetor */}
      {mark > 80 ? (
        <h1>You got a good result</h1>
      ) : (
        <h1>You got avarage rasult</h1>
      )}

      {/* Emmeidiately-Invoked function*/}
      {(() => {
        if (mark >= 80) {
          return <h2>Shahin</h2>;
        } else {
          return <h2>Kholil</h2>;
        }
      })()}

      {/* Array Map (loop)  */}
      {
        <ul>
          {arryMap.map((item, i) => {
            return <li key={i.toString()}>{item}</li>;
          })}
        </ul>
      }

      {/* If else codion (loop)  */}
      {
        <>
          <h1>Login status</h1>
          {loginStatusbtn(true)}
        </>
      }

      {/* Switch condition */}
      {
        <>
          {(() => {
            switch (status) {
              case true:
                return <button>log out switch</button>;
              case false:
                return <button>log in switch</button>;
              default:
                return null;
            }
          })()}
        </>
      }
    </div>
  );
};

export default App;
