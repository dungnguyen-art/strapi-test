module.exports = {
  beforeCreate(event) {
    const {
      params: { data },
    } = event;
    data.summary = strapi
      .service("api::tutorial.tutorial")
      .generateSummary(data);

    if (data.contents) {
      data.summary = data.contents.substring(0, 200);
    }
  },
  beforeUpdate(event) {
    const {
      params: { data },
    } = event;
    data.summary = strapi
      .service("api::tutorial.tutorial")
      .generateSummary(data);
  },
};
