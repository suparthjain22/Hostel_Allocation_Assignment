import React, {useState} from 'react'
import HostelCard from '../components/hostelCard'
import ShowHostels from '../components/showHostels'

function NotBookedScreen(props){
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
    const hostelcardstyle={
        width:'100%',
        height: '60%',
        display: "flex",
        flexFlow:"row nowrap",
        justifyContent:'space-around',
        alignItems:'center'
    }

    

    const [girlChosen,setgirlChosen]=useState(false);
    const [boyChosen,setboyChosen]=useState(false);

    let handleCloser=()=>{
        setgirlChosen(false);
        setboyChosen(false);
        props.handleClose();
    }

    let handleClick=(x)=>{
        let temp=x.target.id.slice(0,3);
        if(temp==="gir"){
            setgirlChosen(true);
            setboyChosen(false);
        }
        else if(temp==="boy"){
            setgirlChosen(false);
            setboyChosen(true);
        }
    }

    return (
        <>
            {girlChosen? (<ShowHostels handleClose={handleCloser} hostelType="G" />) : (boyChosen?(<ShowHostels handleClose={handleCloser} hostelType="B"/>):
            (<div style={homeCardContStyle}>
                <div style={homeCardStyle}>
                    <div>
                        <h1>Choose your Hostel</h1>
                    </div>
                    <div style={hostelcardstyle}>
                        <HostelCard idx="girlsHostel" hostelFor="Girls" cardColor="pink" imgurl="female.jpg" onClick={handleClick}/>
                        <HostelCard idx="boysHostel" hostelFor="Boys" cardColor="blue" imgurl="mlae.jpg" onClick={handleClick}/>
                    </div>
                </div>
            </div>
            )
            )
            }
        </>
    )
}

export default NotBookedScreen