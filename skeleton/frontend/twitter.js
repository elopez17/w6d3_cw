const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(function() {
  $('button.follow-toggle').each( (index, button) => new FollowToggle(button, {}) );
  $('nav.users-search').each( (index, search) => new UsersSearch(search) );
});
