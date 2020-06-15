export interface Address {
  city: string;
  geo: {
    lat: string;
    lng: string;
  };
  street: string;
  suite: string;
  zipcode: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CustomPost {
  body: string;
  favorite: boolean;
  id: number;
  read: boolean;
  title: string;
  userId: number;
}

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
