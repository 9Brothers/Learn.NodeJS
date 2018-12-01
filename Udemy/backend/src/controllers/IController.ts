import express = require("express");

export interface IController {
  Get(req: express.Request, res: express.Response): Promise<express.Response>;
  GetById(req: express.Request, res: express.Response): Promise<express.Response>;
  Save(req: express.Request, res: express.Response): Promise<express.Response>;
  Update(req: express.Request, res: express.Response): Promise<express.Response>;
  Delete(req: express.Request, res: express.Response): Promise<express.Response>;
}