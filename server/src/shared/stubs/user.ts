import { UserModel  } from "../../schemas"


export const user = (): UserModel.User  => {
  return {
    email: 'example@hotmail.com',
    birthdate: new Date(),
    isDeleted: false,
    lastname: 'Perez',
    name: 'Jose'
  }
}