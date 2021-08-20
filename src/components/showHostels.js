import React, {useState} from 'react';
import Floor from './Floor';

function ShowHostels  (props) {
    let hostelarr=['1','2','3','4','5','6'];
    let [hostelSelected,sethostelSelected]=useState(-1);
    let handleClick=(e)=>{
        let temp=Number(e.target.id);
        sethostelSelected(temp);
    }
    let handleCloser=()=>{
        sethostelSelected(-1);
        props.handleClose();
    }
    const homeCardContStyle={
        width:'100vw',
        height:'100vh',
        // border: '3px solid black',
        // borderRadius: '5px',
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
    const hostelLayout={
        width:'39vw',
        display:'flex',
        flexFlow:"row wrap",
        // flexFlow:"row nowrap",
        justifyContent:'center',
        alignItems:'center'
    }
    const hostelFloor={
        width:'10vw',
        height:'5vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // border: '3px solid black',
        background:'gray',
        borderRadius: '5px',
        color:'white',
        marginTop:'1vh',
        marginLeft:'1vh',
        fontWeight:'bold'
        
    }
    return (
        <>
            {
                hostelSelected===-1?
            (<div style={homeCardContStyle}><div style={homeCardStyle}>
                <h1>Chose a Hostel</h1>
                <div style={hostelLayout}>
                    {hostelarr.map((val)=>{
                        return <div style={hostelFloor} onClick={(e)=>{handleClick(e)}} key={val} id={val}>{props.hostelType+val}</div>
                    })}
                </div>
            </div></div>):
            (
                <Floor handleClose={handleCloser} hostelType={props.hostelType} hostelNumber={hostelSelected} />
            )
            }          
        </>

    )
}
export default ShowHostels;
