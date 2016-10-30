var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink activeClassName="active-link">Timer</IndexLink></li>
          <li><Link activeClassName="active-link">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.jamesfelz.com" target="_blank">James Felz</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
