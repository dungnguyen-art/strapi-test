"use strict";

import { createCoreService } from "@strapi/strapi/dist/factories";

/**
 * classroom service.
 */

module.exports = createCoreService("api::classroom.classroom",({ strapi }) => ({
    findTutorials(classroomId) {
        return strapi.entityService.findMany('api::tutorial.tutorial', {
            filters: { classroom: classroomId },
            populate: ['classroom','coverImage', 'classroom.manager']
        });
        
    },
  })
);
