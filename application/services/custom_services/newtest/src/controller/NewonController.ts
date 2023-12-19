import { Request, Response } from 'express';
import { NewonService } from '../service/NewonService';
import { CustomLogger } from '../config/Logger'
let Newon = new NewonService();

export class NewonController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Newon.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into NewonController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from NewonController.ts: GpGetNounCreatedBy');
    })}


}