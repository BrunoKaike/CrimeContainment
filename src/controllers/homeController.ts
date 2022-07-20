import { Request, Response } from 'express';
var createHash = require('hash-generator');
import {Camera} from './classesController';

export const home = async (req: Request, res: Response)=>{

    res.render('pages/home', {});
        
}