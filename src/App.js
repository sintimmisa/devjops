
import './App.css'
import DevJobs from './component/DevJobs';
import Data from './data/data.json';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className='Main'>
    {Data.map(data =>(
      
      <DevJobs className='container'
       key={data.id}
       logo ={data.log}
       postedAt={data.postedAt}
       contact={data.contract}
       position={data.position}
       company={data.company}
       location={data.location}
       
      />
    ))}
  </div>
    </div>
  );
}

export default App;
