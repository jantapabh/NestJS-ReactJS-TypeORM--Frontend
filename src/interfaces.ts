export interface Course {
  id?: number;
  number?: string;
  title?: string;
}

export interface Review {
  id?: number;
  comments: string;
  score: number;
  courseId?: string;
}
