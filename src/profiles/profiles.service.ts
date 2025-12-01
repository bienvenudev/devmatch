import { HttpException, Injectable } from '@nestjs/common';
import { PROFILES } from 'src/mock/profiles.mock';

export interface Profile {
  id: number;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: number;
  location: string;
  avatar: string;
  github: string;
  available: boolean;
}

@Injectable()
export class ProfilesService {
  profiles = PROFILES;

  getProfiles(): Profile[] {
    return this.profiles;
  }

  getProfile(profileId: string): Profile {
    const profile = this.profiles.find(
      (profile) => profile.id === Number(profileId),
    );
    if (!profile) {
      throw new HttpException('Profile is not found!', 404);
    }
    return profile;
  }

  addProfile(profile: Profile): Profile[] {
    this.profiles.push(profile);
    return this.profiles;
  }

  deleteProfile(profileId: string): Profile[] {
    const index = this.profiles.findIndex(
      (profile) => profile.id === Number(profileId),
    );

    if (index === -1) {
      throw new HttpException('Profile is not found!', 404);
    }

    this.profiles.splice(index, 1);
    return this.profiles;
  }
}
