import { DeleteResult, getRepository, getConnection } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { bcrypt } from "bcrypt";
import validator from 'validator';

export class UserController {

  private userRepository = getRepository(User);

  getUser (req: Request, res: Response): void {
    const findUser = async (email: string): Promise<User[]> => {
      return await this.userRepository.find({ email: email });
      
    }
    const comparePasswords = async (submittedPassword: string, userPassword:string): Promise<any> => {
      return await bcrypt.compare(submittedPassword, userPassword);
    }

    try {
      console.log(req.body);
      const { email, password } = req.body;
      if (!(validator.isEmail(email))) throw new Error('invalid password')
      const user = findUser(email)[0];
      if (user) {
        const validatedPass = comparePasswords(password, user.password)
        if (!validatedPass) throw new Error('incorrect username or password');
        req.session.uid = user._uid;
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(401).send({ error: '401', message: error.message });
    }
  }

  async registerUser (req: Request, res: Response): Promise<any> {
    // const hashFunc = async (passphrase: string):Promise<string> => {
    //   return await bcrypt.hash(passphrase, 10);
    // }
    // const { email, password, username } = req.body;
    // const hash = hashFunc(password);
    // const newUser: any = {};
    // newUser.email = email;
    // newUser.username = username;
    // newUser.password = hash;
    
    return await this.userRepository.save(req.body);
    
  }

  async updateUser (req: Request, res: Response): Promise<any> {
    try {
      const { uid } = req.session;
      const user: User | undefined = await this.userRepository.findOne({ _uid: uid});
      if (!user) throw new Error();
      else {
        return await this.userRepository.save({
          ...user,
          ...req.body
        })
      }

    } catch (error) {
      res.status(400).send({ error, message: 'Could not update user' });
    }
  }

  async deleteUser (req: Request): Promise<DeleteResult> {
    const { uid } = req.session;
    return await this.userRepository.delete({ _uid: uid})
  }

  logout (req: Request, res: Response): void {
    try {
      const { _id, firstName, lastName } = req.user;
      const user = { _id, firstName, lastName };
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ error, message: 'User not found' });
    }
  }

}