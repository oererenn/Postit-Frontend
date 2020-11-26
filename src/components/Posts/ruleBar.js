import React from 'react'
import './ruleBar.css'
export function Rulebar(props) {

    var rules = [{
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
        <div className="rule-section">
      <div className="title">
        <span className="hoverable">Posting on Post-It</span>
      </div>
      <div className="rules-wrapper">
        {rules.map((rule, index) => (
          <div key={index} className="rule hoverable">
            <span style={{fontWeight:550}}>{index + 1}</span>
            -
            <span className="name">{rule.rule}</span>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Rulebar
