import { Request, Response } from 'express';
import * as Model from '../models/User';
import _, {indexBy, reduce} from 'underscore';
import * as Classes from './classesController';


export const login = async (req: Request, res: Response) => {
    let id:string = req.body.id;
    let passwd:string = req.body.passwd;

    let user = new Classes.Funcionario(id, passwd);

    res.render('pages/app', {
        user
    });

};


