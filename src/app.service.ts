import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface UserInstagram {
  biography: string;
  name: string;
  followed: number;
  follow: number;
  picture: string;
  username: string;
  photos: number;
}

@Injectable()
export class AppService {
  async getUserInstagram(username: string): Promise<UserInstagram> {
    const headers = {
      'x-ig-app-id': '936619743392459'
    };

    const response = await axios.get(
      `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
      { headers: headers }
    );
    const data = response.data;
    const user = data.data.user;

    return {
      biography: user.biography,
      name: user.full_name,
      followed: user.edge_followed_by.count,
      follow: user.edge_follow.count,
      picture: user.profile_pic_url_hd,
      username: user.username,
      photos: user.edge_owner_to_timeline_media.count
    };
  }
}
