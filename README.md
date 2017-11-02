## rpm (react-promise-middleware) list
[github.com/Alan-Miller/rpm](https://github.com/Alan-Miller/rpm)

List app lets user add and delete list items in a database, using Redux to store the values and react-promise-middleware to handle the promises.

<details>
<summary>Details</summary>

* Component fires Redux action with promise on payload. Promise resolves with teacher data from database.
* Form adds new teachers on Redux using react-promise-middleware to make axios requests.
* Clicking a teacher in the list deletes the teacher from the database.
</details>

<details>
<summary>Special instructions</summary>

* Make a teachers table with data. I recommend adding a teachers table to an existing database you already have. To create the table and insert some initial data into it, copy the SQL commands in the createTables.sql file or copy the lines below:
  ```sql
  create table teachers (
    id serial primary key,
    name varchar(40),
    subject varchar(40)
  );

  insert into teachers
  (name, subject)
  values
  ('Philby', 'Chemistry'),
  ('Barnaby', 'Chemistry'),
  ('Monaghan', 'History'),
  ('Grable', 'History'),
  ('Marx', 'Geometry'),
  ('Kim', 'Geometry'),
  ('Termagant', 'English'),
  ('Stiller', 'English');
  ```
* The .gitignore file ignores the config.js file, so make your own config.js file at the root of the project folder. Inside, export an object with a port value and a connection string like the one below:

  ``` js
  module.exports = {
    PORT: 3001, // pick a port number
    connection: 'yourConnectionStringHere' // connection string to your db
  }
  ```
</details>
<br/>

Tech:
* React 
* Redux
* react-promise-middleware
* axios
* massive
