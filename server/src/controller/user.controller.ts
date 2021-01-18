import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Users} from "../model/entities/User";

export class UserController {

    private userRepository = getRepository(Users);
    
    //TODO -> REMOVE AFTER TESTING
    async all(): Promise<Users[]> {
        console.log('hello');
        return await this.userRepository.find();
    }

    /**GET**/
    async getUser(req: Request): Promise<Users | undefined> {
        return this.userRepository.findOne(req.params.id);
    }

    /**POST**/
    async registerUser(req: Request) {
        
        const hello = await this.userRepository.save(req.body);
    }

    /**PUT**/
    async updateUsername(req: Request) {
        return req.body;
    }

    async changePassword(req: Request) {
        return req.body;
    }

    /**DELETE**/
    async deleteUser(req: Request) {
        return req.body;
    }

    // async RegisterUser(request: Request): Promise<any>{
    //     return this.userRepository.save(request.body);
    // }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

}