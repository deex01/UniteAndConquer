import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/SidebarTags.css';

function SidebarTags() {
  return (
    <div className="sidebar">
      <div className="greeting">
        <i className="far fa-user-circle fa-2x" />
        {' '}
        Hi, Jeremy
      </div>

      <div className="home">
        <Link className="link" to="/">
          <div className="text">Home</div>
        </Link>
      </div>
      <div className="settings">
        <Link className="link" to="/user-settings">
          <div className="text">Settings</div>
        </Link>
      </div>
      <div className="preferences">
        <div className="preferences-title">My Preferences</div>
        <div className="preference-tag">Tag1</div>
        <div className="preference-tag">Tag2</div>
        <div className="preference-tag">Tag3</div>
      </div>
    </div>
  );
}

export default SidebarTags;
