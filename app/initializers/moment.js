/* global moment */

export function initialize(/* container, application */) {
  moment.locale('de');
}

export default {
  name: 'moment',
  initialize: initialize
};
