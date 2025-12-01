import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { type Profile, ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  // GET /profiles
  @Get()
  findAll(): Profile[] {
    return this.profilesService.getProfiles();
  }

  // GET /profiles/:id
  @Get(':profileId')
  getProfile(@Param('profileId') profileId: string): Profile {
    return this.profilesService.getProfile(profileId);
  }
  // POST /profiles
  @Post()
  addProfile(@Body() profile: Profile): Profile[] {
    return this.profilesService.addProfile(profile);
  }
  // PUT /profiles/:id
  // @Put()
  // DELETE /profiles/:id
  @Delete(':profileId')
  deleteProfile(@Param('profileId') profileId: string): Profile[] {
    return this.profilesService.deleteProfile(profileId);
  }
}
