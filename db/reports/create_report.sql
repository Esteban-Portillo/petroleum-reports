insert into reports
(report_type, report_name, report_date, project_id, report_observation)
values 
($1, $2, $3, $4, $5 )
returning *;