import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.usersService.getByEmail(userEmail);
    const isPasswordValidated = await user.validatePassword(userPassword);

    if (user && isPasswordValidated) {
      const { _id, name, email, gold, characters } = user;

      return { id: _id, name, email, gold, characters };
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      name: user.name,
      userId: user.id,
      email: user.email,
      gold: user.gold,
      characters: user.characters,
    };
  }
}
