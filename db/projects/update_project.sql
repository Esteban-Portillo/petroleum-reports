update projects set 
project_admin = $1, project_name = $2, country = $3, city = $4, station = $5
where project_id = $6
returning * ;