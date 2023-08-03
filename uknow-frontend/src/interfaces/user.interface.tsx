

export interface User {
 
  _id: string;
  name: string;
  last_name: string;
  email: string;
  wallet_balance: number;
  created_courses: string[];
  chat_notifications_sent: any[];
  chat_notifications_received: any[]; 
  profile: string;
  bought_courses: [];
  __v: number;
}