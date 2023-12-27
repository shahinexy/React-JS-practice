const App = () => {
  const mark = 85;
  return (
    <div>
      {/* Tarnary oparetor */}
      {
        mark > 80 ? <h1>You got a good result</h1> : <h1>You got avarage rasult</h1>
      }

      {/* Emmeidiately-Invoked function*/}
      {(
        ()=>{
          if(mark>= 80){
            return <h2>Shahin</h2>;
          }
          else{
            return <h2>Kholil</h2>;
          }
        }
      )()}
    </div>
  );
};

export default App;