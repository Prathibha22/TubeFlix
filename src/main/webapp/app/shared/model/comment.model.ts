import dayjs from 'dayjs';
import { IVideoUser } from 'app/shared/model/video-user.model';
import { IVideo } from 'app/shared/model/video.model';

export interface IComment {
  id?: number;
  commentDate?: string | null;
  body?: string | null;
  likes?: number | null;
  dislikes?: number | null;
  videoUser?: IVideoUser | null;
  video?: IVideo | null;
}

export const defaultValue: Readonly<IComment> = {};
