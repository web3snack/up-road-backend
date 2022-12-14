import { UserAuthGuard } from '../common/guard/auth.guard';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserRequestDto } from './dto/update-user.request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(UserAuthGuard)
  @Patch()
  updateUser(
    @Body() updateUserRequestDto: UpdateUserRequestDto,
    @Req() request,
  ) {
    return this.userService.updateUser(updateUserRequestDto, request.user);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  findMyInfo(@Req() request) {
    return request.user;
  }

  @UseGuards(UserAuthGuard)
  @Get('advertisements')
  getMyAdvertisement(@Req() request) {
    return this.userService.getMyAdvertisement(request.user);
  }
}
