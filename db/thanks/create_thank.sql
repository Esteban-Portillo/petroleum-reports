insert into thank 
(
    height,
    diameter,
    max_stress_allowed,
    join_efficiency,
    minimun_thickness_measured,
    especific_gravity,
    thank_name,
    report_id,
    country,
    city,
    station
)
values
($1, $2, $3, $4, $5, $7, $8, $9, $10, $11)
returning * ;