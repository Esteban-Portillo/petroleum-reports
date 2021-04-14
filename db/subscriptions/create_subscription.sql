insert into  project_subscription 
( project_id, user_id )
values
($1,$2)
returning * ;