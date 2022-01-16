import * as jwt from "jsonwebtoken"
import { Injectable } from "@nestjs/common";


@Injectable()
export class JWTService {
 
  private jwtKey;

  constructor() {

    this.jwtKey = process.env.JWT_TOKEN_KEY;

  }

  async verify(userId: string) {

    const token = jwt.sign(userId, this.jwtKey);

    return token;

  }

}