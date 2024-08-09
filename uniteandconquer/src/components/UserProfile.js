import React, { useState } from 'react';
import SidebarTags from './SidebarTags';
import Notifications from './Notifications';
import '../assets/UserProfile.css';

function UserProfile() {
  const [showNotifs, setShowNotifs] = useState(false);
  return (
    <div className="user-profile-page">
      <div>{SidebarTags()}</div>
      <div>
        <div className="profile-title"><h1>My Profile</h1></div>
        <div className="bell-pos">
          <button data-testid="bell-button" className="bell-button" type="button" onClick={() => setShowNotifs(!showNotifs)}>
            {' '}
            <i className="fas fa-bell fa-2x" />
          </button>
        </div>
        <div className="notifications-pos">{showNotifs ? Notifications({ showNotifs, setShowNotifs }) : ''}</div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>My Active Posts</th>
                <th>My Wishlist</th>
              </tr>
              <tr>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
                <td>
                  <div className="post-title">Post [ID]: [itemName] - [status]</div>
                  <div className="post-content">
                    This post is led by [ownerName] and trades [itemNumTarget] of [itemCurrent] for
                    $[pricePerItem]
                    <br />
                    <br />
                    [tags]
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default UserProfile;
