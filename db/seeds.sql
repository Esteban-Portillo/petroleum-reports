create table users (
user_id serial primary key,
admin bool,
name varchar(255),
last_name varchar(255),
title varchar(255),
Company varchar(255),
email varchar(255),
hash text
);

create table projects (
  project_id serial primary key,
  project_admin varchar(255),
  project_name varchar(255),
  country varchar(255),
  city varchar(255),
  station varchar(255)
);

create table project_subscription (
  sub_id serial primary key,
  project_id integer references projects(project_id),
  user_id integer references users(user_id)
);

create table reports (
  report_id serial primary key,
  report_type varchar(255),
  report_name varchar(255),
  report_date date not null default current_date,
  project_id integer references projects(project_id),
  report_observation varchar(255)
)

create table thank(
  thank_id serial primary key,
  height  decimal,
  diameter decimal,
  max_stress_allowed decimal,
  join_efficiency decimal,
  minimun_thickness_measured decimal,
  especific_gravity decimal,
  thank_name varchar(255),
  report_id integer references reports(report_id)
);

create table report_comment (
  comment_id serial primary key,
  report_id integer references reports(report_id),
  user_id integer references users(user_id),
  comment_text varchar (500),
  comment_date date not null default current_date
);