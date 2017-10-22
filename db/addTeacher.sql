insert into teachers (name, subject)
values ($1, $2);

select * from teachers
order by name;