/**
 * i18n-v2 service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::i18n-v2.i18n-v2');
// module.exports = createCoreService('api::classroom.classroom',({ strapi }) => ({
//      findTutorials(classroomId) {
//      return strapi.entityService.findMany('
//      api::tutorial.tutorial', {
//      filters: { classroom: classroomId },
//      Populate: ['classroom','coverImage']
//      });
//      },
//      })
//     );