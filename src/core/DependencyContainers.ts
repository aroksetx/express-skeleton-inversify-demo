
import { Container } from 'inversify';
import { DI_TYPES } from './DependencyTypes';
import { FileUploadService } from '../services';

export const bootDiContainer = new Container();

/**
 * Service binding
 */
bootDiContainer.bind<FileUploadService>(DI_TYPES.FileUploadService).to(FileUploadService);
