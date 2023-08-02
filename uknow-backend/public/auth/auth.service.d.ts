/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { GetUserLoginDto } from './dto/get-user-login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecoverUserDto } from './dto/recover-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RecoverRequestDto } from './dto/recover-request.dto';
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validatePassword(password: string, encriptedPassword: string): Promise<boolean>;
    login(user: GetUserLoginDto): Promise<{
        message: string;
        status: HttpStatus;
        data: {
            token: string;
            user: import("mongoose").FlattenMaps<import("../users/schemas/user.schema").User> & {
                _id: import("mongoose").Types.ObjectId;
            };
        };
    }>;
    register(user: RegisterUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    recoverPasswordRequest(user: RecoverRequestDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    updatePassword(user: RecoverUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    encryptPassword(password: string): Promise<string>;
    passwordVerify(password: string, hash: string): Promise<boolean>;
}
