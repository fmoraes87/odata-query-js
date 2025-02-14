/**
 * SystemQuery - Constructs an OData query with various parameters like filters, 
 * sorting, pagination, and expansions.
 * 
 * This class provides a fluent API to build complex OData queries, supporting 
 * operations such as `$filter`, `$orderby`, `$top`, `$skip`, `$expand`, and more.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

const StringUtils = require("../utils/string-utils");

class SystemQuery {
  constructor() {
    this._count = false;
    this._top = null;
    this._skip = null;
    this._resource = "";
    this._criterions = [];
    this._orderByClause = "";
    this._select = [];
    this._expand = null;
  }

  select(select) {
    this._select = select;
    return this;
  }

  expand(expand) {
    this._expand = expand;
    return this;
  }

  count(count) {
    this._count = count;
    return this;
  }

  top(top) {
    this._top = top;
    return this;
  }

  skip(skip) {
    this._skip = skip;
    return this;
  }

  from(resource) {
    this._resource = resource;
  }

  getResource() {
    return this._resource;
  }

  addFilter(criterion) {
    this._criterions.push(criterion);
  }

  orderBy(orderByClause) {
    this._orderByClause = orderByClause;
  }

  toQueryString(addParamMark, inDeep) {
    let params = [];

    if (this._criterions?.length > 0) {
      const filter = this._criterions
        .map((c) => c.toQueryString())
        .join(" and ");
      params.push(`$filter=${filter}`);
    }

    if (this._count) {
      params.push(`$count=true`);
    } else {
      if (this._top) params.push(`$top=${this._top}`);
      if (this._skip) params.push(`$skip=${this._skip}`);
    }

    if (this._orderByClause) {
      params.push(`$orderby=${this._orderByClause}`);
    }

    if (this._select?.length > 0) {
      params.push(`$select=${StringUtils.concat(this._select, ",")}`);
    }

    if (this._expand) {
      let expandQuery = `$expand=${this._expand.getResource()}`;
      let filter = this._expand.toQueryString(false, true);
      if (filter) {
        expandQuery += `(${filter})`;
      }
      params.push(expandQuery);
    }

    return (addParamMark ? "?" : "") + params.join(inDeep?";":"&");
  }
}

module.exports = { SystemQuery };
