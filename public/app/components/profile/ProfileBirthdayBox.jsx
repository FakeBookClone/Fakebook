import React from 'react';

require('../../../stylesheets/components/profile/ProfileBirthdayBox.scss');

export default class ProfileBirthdayBox extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <h1>Born on January 1, 1990</h1>
        <img src="/images/profile/baby-blue-profile.png"/>
        <img src="/images/profile/gray-people.png"/>
        <span className="gray"> · </span>
        <img src="/images/profile/gray-globe.png"/>
        <i className="fa fa-angle-down gray"></i>
      </div>
    )
  }
}