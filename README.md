# Task Manager Api

This application has the ability to maintain record of the tasks created the application users. An user can also create, view, update and delete their own tasks.
User can also upload their profile pictures and view those.

Security is the top-most priority in this app. Hence, its the most focused feature and has been implemented using JWT tokens.

Below are all the endpoints, with the input & authorization status:

Endpoints             Http Method                  Input Body                            Output                Authorization Enabled?              Description


/users                   POST       { name, email, age:(!required), password }       User and Token                      No                        Create User


/users/login             POST                { email, password }                     User and Token                      No                        Login User


/users/logout            POST                          NA                             Empty Object                       Yes              Logout User from current device


/users/logoutAll         POST                          NA                             Empty Object                       Yes               Logout User from all devices


/users/me                GET                           NA                             User Details                       Yes                    Fetch User Profile 


/users/me               PATCH       Valid property with value, Ex: { "name": "ABC" }  User Details                       Yes                    Update User Profile


/users/me               DELETE                         NA                             User Details                       Yes                    Delete User Account


/users/me/avatar         POST    body:form-data & fileName: upload, only image files  Empty Object                       Yes                  Upload User profile pic


/users/me/avatar        DELETE                         NA                             Empty Object                       Yes                  Delete User profile pic


/users/:id/avatar        GET                           NA                              Image File                        Yes                    View User profile pic


/tasks                   POST         { description, completed:(!required) }           Task Object                       Yes                       Create Task


/tasks                   GET   NA, QS:?completed=true&limit=2&skip=1&sortBy=name:desc  Task List                         Yes                    Fetch All Lists


/tasks/:id               GET                           NA                              Task Object                       Yes                    Fetch Task By Id


/tasks/:id              PATCH    Valid property with value, Ex: { "complted": false }  Task Object                       Yes                    Update Task By Id


/tasks/:id              DELETE                         NA                              Task Object                       Yes                    Delete Task By Id




Go ahead, test the endpoints. Validation and edge-cases are covered. 😎 Cheers!
