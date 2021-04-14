delete from thank where report_id = $1;

delete from report_comment where report_id = $1;

delete from reports where report_id = $1;