import React, {useState} from 'react';

function Floor(props){
let roomArr=[1,2,3,4,10,-2,-1,5,9,8,7,6];
const [roomChoosen,setroomChoosen]=useState(false);
const [roomBooked,setroomBooked]=useState(false);
const [roomSelected,setroomSelected]=useState(0);
const [floorSelected,setfloorSelected]=useState(1);

let handleClick=(e)=>{
    setroomChoosen(true);
    setroomSelected(e.target.id);
}
let handleButtonClick=()=>{
    setroomBooked(true);
    localStorage.setItem("bookedhostelnumber",JSON.stringify(props.hostelType+props.hostelNumber));
    localStorage.setItem("bookedhostelfloor",JSON.stringify(floorSelected));
    localStorage.setItem("bookedhostelroom",JSON.stringify(roomSelected));
}
let handleModlClick=()=>{
    setroomBooked(false);
    setroomChoosen(false);
}
let handleChange=(e)=>{
    setfloorSelected(e.target.value);
}
let handleMainClick=()=>{
    setroomChoosen(false);
    setroomBooked(false);
    setroomSelected(0);
    setfloorSelected(1);
    props.handleClose();
}

const homeCardContStyle={
    width:'100vw',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
const homeCardStyle={
    width:'60vw',
    height:'60vh',
    border: '3px solid black',
    borderRadius: '5px',
    display:'flex',
    flexFlow:"column nowrap",
    justifyContent:'start',
    alignItems:'center'
}
const floorPlan={
    marginTop:'2vh',
    paddingBottom:'1vh',
    borderRadius:'5px',
    width:'35vw',
    height:'40px',
    display:'flex',
    flexFlow:"row wrap",
    justifyContent:'center',
    alignItems:'center'
}
const visible={
    width:'7vw',
    height:'5vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: '5px',
    marginTop:'2vh',
    marginRight:'1vw',
    backgroundColor:'green',
    fontWeight:'bold'
}
const invisible={
    width:'7vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: '5px',
    marginTop:'1vh',
    marginRight:'1vw',
    visibility: "hidden"
}
const bookbutton={
    marginTop:'9vh',
    padding:'10px',
    width: '100px'
}
const modalMain={
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}
const modalContent={
    maxWidth: "400px",
    height:"400px",
    width: "90%",
    backgroundColor: "#cedfe7",
    borderRadius:"10%"
    
}
const header={
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight:"700",
    fontSize:"25px",
    fontFamily:"calibri"
}

const modalButtonclose={
    
    marginLeft:'3vh',
    borderRadius:"100%",
    backgroundColor:"red",
}
const headerBody={
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexFlow:"column nowrap",
    marginLeft:'1vw'
}
const success = {
    marginLeft:"-35px"
}
const confirmBooking = {
    alignItems:"center"
}

return(
    <>
        <div style={homeCardContStyle}>
        <div style={homeCardStyle}>

            <h3>Choose a Floor</h3>
            <select onChange={(e)=>{handleChange(e)}}>
                <option id="1 Floor">1st Floor</option>
                <option id="2 Floor">2nd Floor</option>
                <option id="3 Floor">3rd Floor</option>
                <option id="4 Floor">4th Floor</option>
                <option id="5 Floor">5th Floor</option>
            </select>
            <div style={floorPlan}>
                {roomArr.map((val)=>{
                    if(val<0)
                        return <div style={invisible} id={val} key={val}>{val}</div>
                    return <div style={visible} onClick={(e)=>{handleClick(e)}} id={val} key={val}>{val}</div>
                })}
            </div>
            {roomChoosen?<button className="book" style={bookbutton} onClick={handleButtonClick}>Book Room</button>:null}
        </div></div>
        {
            roomBooked?
            <>
                <div style={modalMain} onClick={handleModlClick}>
                <div style={modalContent} onClick={e=>e.stopPropagation()}>
                    <div style={header}>
                        <button onClick={handleModlClick} style={modalButtonclose}>X</button>
                        <h3 style={success}>Success</h3>
                        <span></span>
                    </div>
                    <div style={headerBody}>
                        <div style={confirmBooking}>Your room has been successfully booked</div>
                        <div>Your room details are: </div>
                        <div>Hostel no: {props.hostelType+props.hostelNumber} </div>
                        <div>Floor no: {floorSelected} </div>
                        <div>Room no: {roomSelected} </div>
                        
                    </div>
                </div>
                </div>
            </>
            :(null)
        }
    </>
);
}
export default Floor;