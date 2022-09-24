export interface StreamsResponse {
  data: Data[];
  pagination: Pagination;
}

export interface Data {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: Date;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}

export interface Pagination {}

type live = { data: { name: string; game: string } };
type offline = { data?: undefined };
export type StreamResponse = live | offline;
