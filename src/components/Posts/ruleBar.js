import React from 'react'

export function Rulebar(props) {

    var topics = [{
        rule: "Remember the human"
    }, {
      rule: "Behave like you would in real life"
    }, {
      rule: "Look for the original source of content"
    }, {
      rule: "Search for duplicates before posting"
    }, {
      rule: "Read the community’s rules"
    }]
return (
        <div className="topic-section">
      <div className="title">
        <span className="hoverable">Posting on Post-It</span>
      </div>
      <div className="topics-wrapper">
        {topics.map((topic, index) => (
          <div key={index} className="topic hoverable">
            <span style={{fontWeight:550}}>{index + 1}</span>
            -
            <span className="name">{topic.rule}</span>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Rulebar
