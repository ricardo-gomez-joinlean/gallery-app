import { UserSchema } from "../../services"


export const user = (): UserSchema.User  => {
  return {
    email: 'example@hotmail.com',
    birthdate: new Date(),
    isDeleted: false,
    lastname: 'Perez',
    name: 'Jose'
  }
}