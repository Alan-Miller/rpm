delete from teachers 
where id = $1;

select * from teachers
order by name;