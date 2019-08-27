
import * as Butter from 'buttercms';

const appConfig = require('../../../../app.config.json');

export const butterService = Butter(appConfig.butterCmsApiKey);
