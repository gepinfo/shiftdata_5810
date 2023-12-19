import { Request, Response } from 'express';
import {NewonDao} from '../dao/NewonDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let Newon = new NewonDao();

export class NewonService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpDelete')
     let  NewonId = req.params.id;
     Newon.GpDelete(NewonId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpSearch')
     let  NewonData = req.query;
     Newon.GpSearch(NewonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpSearchForUpdate')
     let  NewonData = req.body;
     Newon.GpSearchForUpdate(NewonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpUpdate')
     let  NewonData = req.body;
     Newon.GpUpdate(NewonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpGetEntityById')
     let  NewonId = req.params.id;
     Newon.GpGetEntityById(NewonId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpGetAllValues')
     
     Newon.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpCreate')
     let  NewonData = req.body;
     Newon.GpCreate(NewonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into NewonService.ts: GpGetNounCreatedBy')
     let  NewonData = { created_by: req.query.createdby };
     Newon.GpGetNounCreatedBy(NewonData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from NewonService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}