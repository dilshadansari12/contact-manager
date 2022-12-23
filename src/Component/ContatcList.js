import React from "react";


const ContactList = (props)=>{


    

    return(<>
            <div className="Listmaster">
                    <h2>Contact List</h2>
                
                 <div className="tbale">
                    <tbody>
                          <th>Call</th>
                          <th>Name</th>
                          <th>email</th>
                          <th>Number</th>
                          <th>Action</th>

                    {
                        props.Data.map((element)=>{
                            
                        return(< React.Fragment key={element.id}>
                        <tr >

                            <td><a href={`tel:${element.number}`}><i className="fa-sharp fa-solid fa-phone-volume" id="callbtn"></i></a></td>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.number}</td>
                            <td><i className="fa-sharp fa-solid fa-trash" id="deletbtn" onClick={()=>{props.DeletData(element.id)}} ></i></td>
                        </tr>
                        </ React.Fragment>)
                        })
                    }

                 </tbody>
                 </div>
            </div>
    </>)
}


export default ContactList;