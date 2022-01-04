export type Curso = {
  category: number;
  day: string;
  day_of_the_week: string;
  description: string;
  id: number;
  owner: number;
  owner_name: string;
  time_end: string;
  time_start: string;
  title: string;
  enrolled: Object[];
  posts: Object[];
};

export type TokenUser = {
  token: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type NewUser = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cpassword: string;
};

export type Input = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  maxLength: number;
  minLength: number;
};

export type TextArea = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  maxLength: number;
  minLength: number;
  rows: number;
};

export type Select = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  options: {
    id: string;
    name: string;
  }[];
};

export type CourseData = {
  title: string;
  description: string;
  day: string;
  time_start: string;
  time_end: string;
};

export type PalleteOptions = 'default' | 'first-v' | 'second' | 'third';

export type ButtonItem = {
  label: string;
  route: string;
};

export type newMaterial = {
  title: string;
  description: string;
  document: File;
};
