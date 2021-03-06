/* @flow */
import Helmet from 'react-helmet';
import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    defaultMessage: 'Profile',
    id: 'me.profilePage.title',
  },
});

const ProfilePage = () => (
  <div className="profile-page">
    <FormattedMessage {...messages.title}>
      {message =>
        <Helmet title={message} />
      }
    </FormattedMessage>
    <p>
      <FormattedMessage {...messages.title} />
    </p>
  </div>
);

export default ProfilePage;
