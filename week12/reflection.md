## 1. What is the difference between authentication and authorization?
Authentication uses the credentials that the user provides to verify their identity. Authorization, on the other hand, checks to see what the user can do after they are authenticated. Authorization can help deter users from accessing or changing information that they are not allowed to.

## 2. Why does /admin return 403 for a regular user instead of 401?
/admin returns 403 for a regular user because they are already authenticated but not authorized to access the route. A 401 error would be returned if the user wasn't even logged in to begin with.

## 3. Why is ownership checking important?
Ownership checking is important because it makes sure that certain users can only access or change data that they are authorized to, like their own data and not the data of other people. It is crucial for security purposes and data privacy.

## 4. What is the difference between role-based access and ownership-based access?
Role-based access gives permissions to users based on what role they have. In this case, we used admin and regular user roles. Ownership-based access controls what the user can do based on what they own, like a task in our case.

## 5. Why should authorization checks happen on the server instead of the client?
Authorization checks happen on the server for security/data privacy reasons. If the checks were on the client side, a user could bypass them and access or change data they aren't supposed to.