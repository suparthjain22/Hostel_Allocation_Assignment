import React from 'react'

function HostelCard  (props) {
    let clr=props.cardColor==='pink'?"255,0,0,0.2":"0,0,255,0.2";
    let cont={
        height:'60%',
        width:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexFlow:'column',
        backgroundColor:`rgba(${clr})`,
        borderRadius:'10px'
    }
    const imgg={
        width: "40%",
        height:'40%'
    }
    let s=require(`../images/${props.imgurl}`).default;
    return (
        <>
            <div style={cont}  id={props.idx} onClick={(e) =>{props.onClick(e)}}>
                <img style={imgg}id={props.idx+"img"} src={s} alt={props.hostelFor} />
                <div id={props.idx+"name"}>{props.hostelFor} Hostel</div>
            </div>
        </>
    )
}
export default HostelCard;