import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface User {
  biography: string;
  name: string;
  followed: number;
  follow: number;
  picture: string;
  username: string;
  photos: number;
}

interface BioLinkInstagram {
  title: string;
  lynx_url: string;
  url: string;
  link_type: string;
}

interface BiographyWithEntities {
  raw_text: string;
  entities: any[];
}

interface Count {
  count: number;
}

interface edgeMutalFollowdBy {
  count: number;
  edges: any[];
}

interface media {
  count: number;
  page_info: {
    has_next_page: boolean;
    end_cursor: string;
  };
  edges: any[];
}

interface UserInstagram {
  biography: string;
  bio_links: BioLinkInstagram;
  biography_with_entities: BiographyWithEntities;
  blocked_by_viewer: boolean;
  restricted_by_viewer: any;
  country_block: boolean;
  external_url: string;
  external_url_linkshimmed: string;
  edge_followed_by: Count;
  fbid: string;
  followed_by_viewer: boolean;
  edge_follow: Count;
  follows_viewer: boolean;
  full_name: string;
  group_metadata: any;
  has_ar_effects: boolean;
  has_clips: boolean;
  has_guides: boolean;
  has_channel: boolean;
  has_blocked_viewer: boolean;
  highlight_reel_count: number;
  has_requested_viewer: boolean;
  hide_like_and_view_counts: boolean;
  id: string;
  is_business_account: boolean;
  is_professional_account: boolean;
  is_supervision_enabled: boolean;
  is_guardian_of_viewer: boolean;
  is_supervised_by_viewer: boolean;
  is_supervised_user: boolean;
  is_embeds_disabled: boolean;
  is_joined_recently: boolean;
  guardian_id: any;
  business_address_json: any;
  business_contact_method: string;
  business_email: any;
  business_phone_number: any;
  business_category_name: any;
  overall_category_name: any;
  category_enum: any;
  category_name: any;
  is_private: boolean;
  is_verified: boolean;
  edge_mutual_followed_by: edgeMutalFollowdBy;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  requested_by_viewer: boolean;
  should_show_category: boolean;
  should_show_public_contacts: boolean;
  transparency_label: any;
  transparency_product: string;
  username: string;
  connected_fb_page: any;
  pronouns: [];
  edge_felix_video_timeline: media;
  edge_owner_to_timeline_media: media;
  edge_saved_media: media;
  edge_media_collections: media;
  edge_related_profiles: { edges: any[] };
}

interface ResponseInstagram {
  data: ResponseWebProfileInfoInstagram;
  status: 'ok';
}

interface ResponseWebProfileInfoInstagram {
  user: UserInstagram;
}

@Injectable()
export class InstagramService {
  async getUserInstagram(username: string): Promise<User> {
    const headers = {
      'x-ig-app-id': '936619743392459'
    };

    const response = await axios.get<ResponseInstagram>(
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
