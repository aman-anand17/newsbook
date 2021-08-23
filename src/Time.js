import "./Time.css";
import {useState} from "react";

function Time(props){
    let times = new Date();
    let t = `${times.getHours()}:${times.getMinutes()}`;
    const[time,setTime] = useState(t)
    setInterval(()=>{
        let ti = new Date();
    let tii = `${ti.getHours()}:${ti.getMinutes()}`;
        setTime(tii);
    },1000);


    function join(t, a, s) {
        function format(m) {
           let f = new Intl.DateTimeFormat('en', m);
           return f.format(t);
        }
        return a.map(format).join(s);
     }
     
     let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
     let s = join(new Date, a, '-');

    return(
        <div className="time">
            <div className="time-date">
                {s}

            </div>
            <div className="time-time">
                {time}

            </div>

        </div>
    )
}
export default Time;