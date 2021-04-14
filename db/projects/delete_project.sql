delete from thank where report_id = (select report_id from reports where project_id = $1 );

delete from report_comment where report_id = (select report_id from reports where project_id = $1);

delete from reports where project_id = $1;

delete from  project_subscription where project_id = $1;



delete from projects where project_id = $1 ; 