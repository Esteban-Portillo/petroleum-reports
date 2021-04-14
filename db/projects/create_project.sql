insert into projects 
(project_admin, project_name, country, city, station)
values
($1,$2,$3,$4,$5)
returning * ;