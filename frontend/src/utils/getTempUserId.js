import { v4 as uuidv4 } from 'uuid';

export function getTempUserId() {
  let tempUserId = localStorage.getItem('temp_user_id');
  if (!tempUserId) {
    tempUserId = uuidv4();
    localStorage.setItem('temp_user_id', tempUserId);
  }
  return tempUserId;
}
