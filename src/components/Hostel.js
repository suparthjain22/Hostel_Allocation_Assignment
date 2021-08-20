import React from 'react'

function Hostel(props){
    const homeCardContStyle={
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    const homeCardStyle={
        width:'50vw',
        height:'50vh',
        border: '3px solid black',
        borderRadius: '5px',
        display:'flex',
        flexFlow:"column nowrap",
        justifyContent:'start',
        alignItems:'center'
    }
    let handledeleteRoom =()=>{
        localStorage.removeItem("bookedhostelnumber");
        localStorage.removeItem("bookedhostelfloor");
        localStorage.removeItem("bookedhostelroom");
        props.bookingremover();
    }
    let hoostel=JSON.parse(localStorage.getItem("bookedhostelnumber"));
    let flooor=JSON.parse(localStorage.getItem("bookedhostelfloor"));
    let rooom=JSON.parse(localStorage.getItem("bookedhostelroom"));
    return (
        <>
            <div style={homeCardContStyle}>
                <div style={homeCardStyle}>
                <h1 >Welcome {props.name} </h1>
                <div>
                <div>You have already booked a room</div><br/>
                <div>Your room details are as follows </div>
                <div>Hostel No: {hoostel}</div>
                <div>Floor no:{flooor}</div>
                <div>Room No:{rooom}</div></div>
                <button onClick={handledeleteRoom}>Clear booking</button>
            </div>
            </div>
        </>
    )
}

export default Hostel
