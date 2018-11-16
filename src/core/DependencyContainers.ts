
import { Container } from 'inversify';
import { DI_TYPES } from './DependencyTypes';
import { FileUploadService } from '../services';
import express = require('express');
import multer = require('multer');

const servicesContainer = new Container();
const middleWareContainer = new Container();

/**
 * Service binding
 */
servicesContainer.bind<FileUploadService>(DI_TYPES.FileUploadService).to(FileUploadService);


middleWareContainer.bind<express.RequestHandler>('Mul').toConstantValue(multer({ dest: `uploads/` }).single('avatar'));




// Group two containers
export const bootDiContainer = Container.merge(servicesContainer, middleWareContainer);