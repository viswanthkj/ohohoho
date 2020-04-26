import {COUNTER_CHANGE, USER_EMAIL, USER_PASSWORD} from '../constants';

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}

export function saveUserEmail(email) {
  return {
    type: USER_EMAIL,
    email,
  };
}

export function saveUserPassword(password) {
  return {
    type: USER_PASSWORD,
    password,
  };
}
