"# Research-CRUD" 
**Research migration - CRUD - transaction**
Description

Tìm hiểu về:

1/ Typescript

2/ Expressjs

3/ Sequelize

5/ Vue3

Yêu cầu:
1/ Viết migration để thiết kế DB.
2/ Sử dụng template primevue để làm giao diện.
3/ Backend sử dụng nitro và typescript
**A. RESEARCH**
- Step 1: Tìm hiểu lý thuyết về Typescript, Nitro, Sequelize, Vue3
- Step 2: Thiết kế schema
- Step 3: Code BE
- Step 4: Code FE
- Step 5: Test
- Step 6: Báo cáo


**NHÁP**
====== chạy trong docker 
docker exec -it mysql_db mysql -u root -p
Nhập pass là root

== Xem database 
docker exec -it mysql_db mysql -u root -p -e "SHOW DATABASES;"

== chạy migration
npx sequelize-cli db:migrate


== Tạo data mẫu trong seeder 
Lệnh tạo file: 
npx sequelize-cli seed:generate --name demo-users
npx sequelize-cli seed:generate --name demo-researches

Chạy dữ liệu: npx sequelize-cli db:seed:all
Xóa dữ liệu: npx sequelize-cli db:seed:undo:all

====== chạy trong docker 
docker exec -it mysql_db mysql -u root -p
Nhập pass là root

== Xem database 
docker exec -it mysql_db mysql -u root -p -e "SHOW DATABASES;"

== chạy migration
npx sequelize-cli db:migrate


== Tạo data mẫu trong seeder 
Lệnh tạo file: 
npx sequelize-cli seed:generate --name demo-users
npx sequelize-cli seed:generate --name demo-researches

Chạy dữ liệu: npx sequelize-cli db:seed:all
Xóa dữ liệu: npx sequelize-cli db:seed:undo:all
