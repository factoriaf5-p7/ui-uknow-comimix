/* eslint-disable no-mixed-spaces-and-tabs */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';
import { RegisterUserDto } from '../auth/dto/register-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UpdateUserByAdminDto } from './dto/update-user-byadmin.dto ';
import { Request } from 'express';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	// @UseGuards(AuthGuard) // admin
	create(@Body() registerUserDto: RegisterUserDto) {
		return this.usersService.create(registerUserDto);
	}

	@UseGuards(AuthGuard)
	@Get('profile')
	getProfile(@Req() request: Request) {
		return this.usersService.getProfile(request['user']);
	}

	@Get('admin')
	// @UseGuards(AuthGuard) //admin
  	findAllAdmin() {
  		return this.usersService.findAllAdmin();
  	}

	@Get('admin/:id')
	// @UseGuards(AuthGuard) //admin
	findOneAdmin(@Param('id') id: ObjectId) {
		return this.usersService.findOneAdmin(id);
	}

  	@Get(':id')
	// @UseGuards(AuthGuard) //admin
  	findOne(@Param('id') id: ObjectId) {
  		return this.usersService.findOne(id);
  	}

	@Get()
	// @UseGuards(AuthGuard) //admin
  	findAll() {
  		return this.usersService.findAll();
  	}

  	@Patch()
  	// @UseGuards(AuthGuard)
  	update(@Body() updateUserDto: UpdateUserDto) {
  		return this.usersService.update(updateUserDto);
	}

	@Patch('admin/update-balance/')
  	updateBalance(@Body() userBalanceDto: any) {
  		return this.usersService.udpateBalance(userBalanceDto);
  	}

	@Patch('admin')
	// @UseGuards(AuthGuard)
  	updateUserByAdmin(@Body() updateUserByAdminDto: UpdateUserByAdminDto) {
  		return this.usersService.updateUserByAdmin(updateUserByAdminDto);
  	}

	@Delete('admin/delete')
  	// @UseGuards(AuthGuard) //admin
  	deleteUserByAdmin(@Query('id') id: ObjectId) {
  		return this.usersService.deleteUserByAdmin(id);
  	}

}