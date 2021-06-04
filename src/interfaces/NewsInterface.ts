export interface NewsData {
  title: string;
  body: Sections[];
}

export interface Sections {
  type: string;
  model?: Model;
}
export interface Model {
  text?: string;
  url?: string;
  altText?: string;
  height?: string;
  width?: string;
  items?: string[];
}
