# ODataJS – A JavaScript Library for Querying OData Endpoints  

**ODataJS** is a lightweight and intuitive JavaScript library for building and executing OData queries. It simplifies constructing complex queries using a fluent API while ensuring compatibility with the **OData protocol**.  

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