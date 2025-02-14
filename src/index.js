/**
 * odata-query-js - A JavaScript Library for Querying OData Endpoints
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

const { SystemQueryBuilder } = require("./odata/system-query-builder.model");
const { Restrictions } = require("./odata/restrictions.factory"); 

module.exports = { 
    SystemQueryBuilder,
    Restrictions
}