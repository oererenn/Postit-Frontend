import React,{useEffect,useState} from 'react'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import Button from '@material-ui/core/Button';
import axios from 'axios'
import './topics.css'


export function Topics(props) {

const [topics, setTopics] = useState([]);


const fetchTopics = () => {
  axios.get("http://localhost:8080/topics").then(res => {
    console.log(res);
    setTopics(res.data);
  }).catch(err => {
    console.log(err);
  })
}


useEffect(() => {
  fetchTopics()
}, []);

    return (
        <div className="topic-section">
      <div className="title">
        <span className="hoverable">Popular Topics</span>
      </div>
      <div className="topics-wrapper">
        {topics.slice(0,5).map((topic, index) => (
          <div key={index} className="topic hoverable">
            <span style={{fontWeight:550}}>{index + 1}</span>
            <ArrowDropUp />
            <span className="name">c/{topic.name}</span>
          </div>
        ))}
      </div>
      <div className="action-buttons">
        
        <div className="secondary-buttons d-flex">
           <Button size="small" className="ml-auto" style={{fontWeight:550,textTransform:"none",fontSize:12}} variant="contained" color="primary">
  More
</Button>
          
    
        </div>
      </div>
    </div>
    )
}

export default Topics
