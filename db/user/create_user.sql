insert into users 
(admin, name, last_name, title, company, email, hash)
values
($1,$2, $3, $4, $5, $6, $7)
returning * ;