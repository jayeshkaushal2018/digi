import { Link } from "react-router-dom";
import "./EventCard.css";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import { FcViewDetails } from "react-icons/fc";
import { CiBookmarkCheck } from "react-icons/ci";
const EventCard = ({ id, heading, date, location, img }) => {
  const { year, month } = date;
  return (

    
  
     
      <div className="conatiner" style={{"display": "flex"}}>
      <table>
      <tr>
        <td>
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{"width":"19rem", "height":"30rem" ,"paddingBottom": "20rem"}}>
      {/* <div className="card-img-wrapper"> */}
          <img src={img} alt="image not found" />
        {/* </div> */}
        <div className="card-content">
          {/* <h3>{heading}</h3> */}
          <h5 class="card-title"><b>{heading}</b></h5>
          <p>
          <span> <MdCalendarMonth className="icon" /> <b>{month} / {year}</b></span>
          </p>
          <p><span> <IoLocationSharp className="icon" /> <b>{location}</b></span> </p>
          <Link to ={`/events/${id}`}>
          <button type="button" class="btn btn-primary btn-lg btn-bloc" >Details <CiBookmarkCheck/></button>
          </Link>
        </div>

        {/* <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div> */}
      </div></td>
     
      <td>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{"width":"19rem", "height":"30rem" ,"padding":"50rem","paddingBottom": "20rem","marginLeft": "30px"}}>
      {/* <div className="card-img-wrapper"> */}
          <img src={img} alt="image not found" />
        {/* </div> */}
        <div className="card-content">
          {/* <h3>{heading}</h3> */}
          <h5 class="card-title"><b>{heading}</b></h5>
          <p>
          <span> <MdCalendarMonth className="icon" /> <b>{month} / {year}</b></span>
          </p>
          <p><span> <IoLocationSharp className="icon" /> <b>{location}</b></span> </p>
          <Link to ={`/events/${id}`}>
          <button type="button" class="btn btn-primary btn-lg btn-bloc" >Details <CiBookmarkCheck/></button>
          </Link>
        </div>

        {/* <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div> */}
      </div></td>
      <td>
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{"width":"19rem", "height":"30rem" ,"paddingBottom": "20rem" ,    "marginLeft": "30px"
}}>
      {/* <div className="card-img-wrapper"> */}
          <img src={img} alt="image not found" />
        {/* </div> */}
        <div className="card-content">
          {/* <h3>{heading}</h3> */}
          <h5 class="card-title"><b>{heading}</b></h5>
          <p>
          <span> <MdCalendarMonth className="icon" /> <b>{month} / {year}</b></span>
          </p>
          <p><span> <IoLocationSharp className="icon" /> <b>{location}</b></span> </p>
          <Link to ={`/events/${id}`}>
          <button type="button" class="btn btn-primary btn-lg btn-bloc" >Details <CiBookmarkCheck/></button>
          </Link>
        </div>

        {/* <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div> */}
      </div></td>
      </tr>
      </table>
      </div>
    
  );
};

export default EventCard;