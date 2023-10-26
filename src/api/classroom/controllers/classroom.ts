"use strict";
/**
 * classroom controller
 */

import { factories } from "@strapi/strapi";
import { createCoreController } from "@strapi/strapi/dist/factories";

// export default factories.createCoreController("api::classroom.classroom");
module.exports = createCoreController(
  "api::classroom.classroom",
  ({ strapi }) => ({
    async findTutorials(ctx) {
      try {
        strapi.log.debug(`params:${JSON.stringify(ctx.params)}`);
        strapi.log.debug(` query: ${JSON.stringify(ctx.query)}`);
        // service updated
        const { params } = ctx;
        const results = await strapi
          .service("api::classroom.classroom")
          .findTutorials(params.id);
        return results;
        // return this.transformResponse(results);
      } catch (error) {
        ctx.body = error;
      }
      // return "to be implemented"
    },
    // async seed(ctx) {
    //   try {
    //     const classroomsPromise = [];
    //     // Min and Max values to generate random number in range
    //     const min = 1;
    //     const max = 30;
    //     // Number of classrooms to be created
    //     const numberOfClasses = 50;
    //     Array(numberOfClasses)
    //       .fill(null)
    //       .forEach((_item, index) => {
    //         const name = `classroom_${index + 1}`;
    //         // Get random numnber in range of min and max
    //         const maxStudents = Math.random() * (max - min + 1) + min;
    //         classroomsPromise.push(strapi.services("api::classroom.classroom").create({
    //               data: {
    //                 name,
    //                 description: `Description of the classroom${name}`,
    //                 maxStudents: Math.floor(maxStudents),
    //               },
    //             })
    //         );
    //       });
    //     await Promise.all(classroomsPromise);
    //     return { message: "Ok" };
    //   } catch (e) {
    //     strapi.log.error("Failed to seed the database");
    //   }
    // },
  })
);
