import { Request, Response, NextFunction } from "express";
import { NewonController } from '../controller/NewonController';


export class Routes {
    private Newon: NewonController = new NewonController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Newon/:id').delete(this.Newon.GpDelete);
app.route('/Newon/get/search').get(this.Newon.GpSearch);
app.route('/Newon/get/update').put(this.Newon.GpSearchForUpdate);
app.route('/Newon').put(this.Newon.GpUpdate);
app.route('/Newon/:id').get(this.Newon.GpGetEntityById);
app.route('/Newon').get(this.Newon.GpGetAllValues);
app.route('/Newon').post(this.Newon.GpCreate);
app.route('/Newon/userid/created_by').get(this.Newon.GpGetNounCreatedBy);
     }

}