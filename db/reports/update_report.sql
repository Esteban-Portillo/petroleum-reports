update reports 
set
report_type = $1,
report_name = $2,
report_date = $3,
project_id = $4,
report_observation = $5
where report_id = $6
returning *;