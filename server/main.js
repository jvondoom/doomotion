import '../imports/api/shows.js';
import '../imports/api/current.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.validateNewUser(function (user) {
    console.log(user.username === "admin");
    return user.username === "admin";
  });
});
