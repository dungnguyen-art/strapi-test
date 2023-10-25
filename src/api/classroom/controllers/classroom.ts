"use strict";
/**
 * classroom controller
 */

import { factories } from '@strapi/strapi'
import { createCoreController } from '@strapi/strapi/dist/factories';

export default factories.createCoreController('api::classroom.classroom');
module.exports = createCoreController('api::classroom.classroom', ({strapi}) => ({
    async findTutorials(ctx) {
        try {
            ctx.body = 'ok'
        } catch (error) {
            ctx.body = error;
        }
        // return "to be implemented"
    }
}))
