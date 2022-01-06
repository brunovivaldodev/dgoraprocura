import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { usersRepository } from "../../repositories/UserRepository";



export class CreateUserUseCase {
    async execute({ name, email, password, number }: ICreateUserDTO) {
        const userRepository = new usersRepository
        let user = await userRepository.findByEmail(email)

        if (user) {
            throw new Error("User Already Exists")
        }

        user = userRepository.repository.create({
            email,
            name,
            password,
            number
        })

        console.log(user)

        userRepository.repository.save(user)

        return user;
    }

}