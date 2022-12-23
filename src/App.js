import { useState ,useEffect } from "react";
import Naviagtion from "./Component/Naviagtion";
import Addcontact from "./Component/Addcontact"
import ContactList from "./Component/ContatcList";
import {v4} from "uuid";
import {Routes,Route, Router  , Link} from "react-router-dom";
const App = ()=>{

     const [Data , setData]=useState([]);

const  GetDataFromAddcontatc = (Adddata)=>{
       setData([...Data ,{id:v4() , ...Adddata }])
  }

  useEffect(()=>{
    let Ndata = JSON.parse(localStorage.getItem(Data_key));
    if(Ndata != ""){
        setData(Ndata)
    }
  },[])

   const Data_key="Data"
  useEffect(()=>{
    localStorage.setItem(Data_key , JSON.stringify(Data) );
  },[Data])


  const DeletData = (ddata)=>{
  
    if(Data.length <= 1){
      alert("You Must Need To have One Contact At List...")
    }else{

      const Ndataa=  Data.filter((Data)=>{
        return  Data.id !== ddata
     });
 
     setData(Ndataa);
 

    }


  }

    return(
    <>

   
        <div className="master">


            <nav className="navigation">
                <Naviagtion />
            </nav>

           <div className="LinksMaster">
              <Link to={"/"} className="Link" >ADD CONTACT</Link>
              <Link to={"/list"} className="Link" >VIEW CONTACT LIST</Link>
           </div>

            <Routes>
                <Route exact path="/"      element={ <Addcontact GetDataFromAddcontatc={GetDataFromAddcontatc} /> }/>
                <Route exact path="/list" element={ <ContactList Data={Data}  DeletData={DeletData} /> }/>
             </Routes>



        </div>

    
    </>
    )
}

export default App;