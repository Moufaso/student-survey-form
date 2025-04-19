HW4 Documentation
Saman Hosseini

Steps:
1. Created the Spring Boot project for backend and connected it to DB
2. Implemented the CRUD operations
    - post survey: "/api/survey" + post
    - list surveys: "/api/list" + get
    - get survey: "api/list/id" + get 
    - update survey: "api/list/id" + put
    - delete survey: "api/list/id" + delete
3. Created the VueJS project for frontend.
4. Implemented the routed for navigation.
5. Created the SurveyComponent:
    - if route has id then fetch the survey from db.
    - else submit new survey to db.
6. Created the ListComponent:
    - fetched all surveys from db and populates table.