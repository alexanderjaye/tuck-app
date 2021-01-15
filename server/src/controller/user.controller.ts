import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../model/entities/User";

export class UserController {

    private userRepository = getRepository(User);

    /**GET**/

    /**POST**/

    /**PUT**/

    /**DELETE**/
    async all(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async one(req: Request): Promise<User | undefined> {
        return this.userRepository.findOne(req.params.id);
    }

    async save(request: Request): Promise<any>{
        return this.userRepository.save(request.body);
    }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

}