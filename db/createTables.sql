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