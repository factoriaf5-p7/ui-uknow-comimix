import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserLoginDto } from './dto/get-user-login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecoverUserDto } from './dto/recover-user.dto';
import { RecoverRequestDto } from './dto/recover-request.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: GetUserLoginDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    signup(user: RegisterUserDto): Promise<{
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
}
