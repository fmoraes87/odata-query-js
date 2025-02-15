# OdataQueryJS – A JavaScript Library for Querying OData Endpoints  

**OdataQueryJS** is a lightweight and intuitive JavaScript library for building and executing OData queries. It simplifies constructing complex queries using a fluent API while ensuring compatibility with the **OData protocol**.  

## 📦 Installation  
```sh
npm install odata-query-js
```

## 🚀 Usage  

### Basic Query Example  
Construct an OData query to fetch records from `JP_ToDo` with multiple filters and selected fields:  

```js
const { SystemQueryBuilder, Restrictions } = require("odata-query-js");

let cProjectTaskFilter = new SystemQueryBuilder()
    .from("JP_ToDo")
    .addFilter(Restrictions.ge("Processed", false))
    .addFilter(Restrictions.ge("IsOpenToDoJP", true))
    .addFilter(Restrictions.ge("AD_User_ID", 1000019))
    .addFilter(Restrictions.ge("JP_ToDo_ScheduledStartDate", "2025-02-09"))
    .addFilter(Restrictions.lt("JP_ToDo_ScheduledStartDate", "2025-02-16"))
    .select(["AD_User_ID", "JP_ToDo_ID", "Name", "JP_ToDo_Status", "JP_ToDo_ScheduledStartDate", "JP_ToDo_ScheduledEndDate"])
    .build();

let url = "/" + cProjectTaskFilter.getResource() + cProjectTaskFilter.toQueryString(true);
console.log(url)

```

### 🔍 Resulting OData Query:  
```
/JP_ToDo?$filter=Processed ge false and IsOpenToDoJP ge true and AD_User_ID ge 1000019 and JP_ToDo_ScheduledStartDate ge '2025-02-09' and JP_ToDo_ScheduledStartDate lt '2025-02-16'&$select=AD_User_ID,JP_ToDo_ID,Name,JP_ToDo_Status,JP_ToDo_ScheduledStartDate,JP_ToDo_ScheduledEndDate
```

---

### Chained Queries with Expand  
You can also build more advanced queries with **nested expansions**:  

```js
let cProjectTaskFilter = new SystemQueryBuilder()
    .from("C_ProjectTask")
    .select(["C_ProjectTask_ID"])
    .top(3)
    .build();

let cProjectPhaseFilter = new SystemQueryBuilder()
    .from("C_ProjectPhase")
    .expand(cProjectTaskFilter)
    .select(["C_ProjectPhase_ID"])
    .top(1)
    .build();

let cProjectFilter = new SystemQueryBuilder()
    .from("c_project")
    .expand(cProjectPhaseFilter)
    .addFilter(Restrictions.ge("PlannedQty", 5))
    .select(["c_project_id", "value", "C_ProjectType_ID"])
    //.orderBy("SeqNo") // Optional ordering
    .build();

let url = "/" + cProjectFilter.getResource() + cProjectFilter.toQueryString(true);
console.log(url)
```

### 🔍 Resulting OData Query:  
```
/c_project?$filter=PlannedQty ge 5&$select=c_project_id,value,C_ProjectType_ID&$expand=C_ProjectPhase($top=1;$select=C_ProjectPhase_ID;$expand=C_ProjectTask($top=3;$select=C_ProjectTask_ID))
```

Here’s a list of all possible restrictions (OData filter operations) in your `README` file:

---

### Restrictions Available in the Library

This library provides a set of helper functions to create OData-compliant filter expressions. Below is a list of all the available restrictions:

#### **Equality and Comparison**
- **`eq(propertyName, value)`**  
  Creates an equality filter (`eq`) for a property and a value.  
  Example: `Restrictions.eq("Age", 30)`

- **`ne(propertyName, value)`**  
  Creates a not equal (`ne`) filter for a property and a value.  
  Example: `Restrictions.ne("Status", "Completed")`

- **`gt(propertyName, value)`**  
  Creates a greater than (`gt`) filter for a property and a value.  
  Example: `Restrictions.gt("Price", 100)`

- **`ge(propertyName, value)`**  
  Creates a greater than or equal to (`ge`) filter for a property and a value.  
  Example: `Restrictions.ge("Quantity", 50)`

- **`lt(propertyName, value)`**  
  Creates a less than (`lt`) filter for a property and a value.  
  Example: `Restrictions.lt("Age", 25)`

- **`le(propertyName, value)`**  
  Creates a less than or equal to (`le`) filter for a property and a value.  
  Example: `Restrictions.le("Rating", 4)`

#### **Null Checks**
- **`isNull(propertyName)`**  
  Creates a filter to check if a property is `null`.  
  Example: `Restrictions.isNull("EndDate")`

- **`isNotNull(propertyName)`**  
  Creates a filter to check if a property is not `null`.  
  Example: `Restrictions.isNotNull("StartDate")`

#### **String Operations**
- **`like(propertyName, value)`**  
  Creates a filter to check if a property contains the given value (like operation).  
  Example: `Restrictions.like("Name", "John")`

#### **Column-to-Column Comparison**
- **`eqProperty(propertyNameA, propertyNameB)`**  
  Creates an equality filter comparing two properties.  
  Example: `Restrictions.eqProperty("StartDate", "EndDate")`

- **`geProperty(propertyNameA, propertyNameB)`**  
  Creates a greater than or equal to filter comparing two properties.  
  Example: `Restrictions.geProperty("StartDate", "EndDate")`

- **`gtProperty(propertyNameA, propertyNameB)`**  
  Creates a greater than filter comparing two properties.  
  Example: `Restrictions.gtProperty("Quantity", "MinimumQuantity")`

- **`leProperty(propertyNameA, propertyNameB)`**  
  Creates a less than or equal to filter comparing two properties.  
  Example: `Restrictions.leProperty("Price", "DiscountPrice")`

- **`ltProperty(propertyNameA, propertyNameB)`**  
  Creates a less than filter comparing two properties.  
  Example: `Restrictions.ltProperty("Age", "MaxAge")`

- **`neProperty(propertyNameA, propertyNameB)`**  
  Creates a not equal filter comparing two properties.  
  Example: `Restrictions.neProperty("StartDate", "EndDate")`


## 📖 Features  
✅ Fluent API for building OData queries  
✅ Supports filtering, selecting, sorting, pagination, and expansions  
✅ Compatible with OData v4  
✅ Works with any JavaScript environment  

---

### 💡 Contributing  
Contributions are welcome! Feel free to submit issues, suggest improvements, or open pull requests.  

---

### 📜 License  
This project is licensed under the **MIT License**.  

---

🔥 **ODataJS** makes querying OData endpoints seamless and efficient! Happy coding! 🚀