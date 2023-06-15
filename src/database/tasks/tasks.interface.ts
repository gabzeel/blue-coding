export interface ITaks {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface IPagination {
  skip: number;
  take: number;
}
