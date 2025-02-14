const { SystemQuery } = require("./system-query.model");

class SystemQueryBuilder {
  constructor() {
    this.systemQuery = new SystemQuery();
  }

  select(select) {
    this.systemQuery.select(select);
    return this;
  }

  count(count) {
    this.systemQuery.count(count);
    return this;
  }

  top(top) {
    this.systemQuery.top(top);
    return this;
  }

  skip(skip) {
    this.systemQuery.skip(skip);
    return this;
  }

  from(resource) {
    this.systemQuery.from(resource);
    return this;
  }

  expand(expand) {
    this.systemQuery.expand(expand);
    return this;
  }

  addFilter(criterion) {
    this.systemQuery.addFilter(criterion);
    return this;
  }

  orderBy(orderByClause) {
    this.systemQuery.orderBy(orderByClause);
    return this;
  }

  build() {
    return this.systemQuery;
  }
}

module.exports = { SystemQueryBuilder };
