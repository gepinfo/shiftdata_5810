import * as mongoose from 'mongoose';
import NewonModel from '../models/daomodels/Newon';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class NewonDao {
    private Newon = NewonModel;
    constructor() { }
    
    public async GpDelete(NewonId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpDelete');

    

    
    
    
    this.Newon.findByIdAndRemove(NewonId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(NewonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(NewonData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.Newon.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(NewonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpSearchForUpdate');

    

    
    
    
    this.Newon.findOneAndUpdate({ _id: NewonData._id }, NewonData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(NewonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpUpdate');

    

    
    
    
    this.Newon.findOneAndUpdate({ _id: NewonData._id }, NewonData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(NewonId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpGetEntityById');

    

    
    
    
    this.Newon.findById(NewonId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpGetAllValues');

    

    
    
    
    this.Newon.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(NewonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpCreate');

    let temp = new NewonModel(NewonData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(NewonData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into NewonDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.Newon.aggregate(([
                        { $match: { $and: [{ created_by: NewonData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from NewonDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}