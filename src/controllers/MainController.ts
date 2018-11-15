import "reflect-metadata";
import { controller, httpGet, httpPost, requestParam, httpDelete, interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { DI_TYPES } from '../core/DependencyTypes';
import { FileUploadService } from '../services';
import express = require('express');
import multer = require('multer');
import { Request } from "express";

const UPLOAD_PATH = 'uploads';
const upload = multer({ dest: `${UPLOAD_PATH}/` }); // multer configuration


@controller('/')
export class MainController implements interfaces.Controller {
  private fileUpload: FileUploadService;

  constructor(
    @inject(DI_TYPES.FileUploadService) _fileUpload: FileUploadService
  ) {
    this.fileUpload = _fileUpload;
  }


  @httpGet('/')
  public index(): string {
    console.log(this.fileUpload.getIntance())
    return 'Home sweet home';
  }

  @httpGet('/:id')
  public qeqweqwe(@requestParam("id") id: any) {
    const a = id;
    return 'Home sweet homeadasdas';
  }


  @httpPost('/', upload.single('avatar'))
  public async avatar(req, res) {
    const a = req;
    const f = res;
    return 'asdasdasd';
  }
}

