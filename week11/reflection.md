## 1. What is a session?
A session is an authentication state that is stored on the server side. It's purpose is to provide a way for the server to remember a user once they have already logged in, this way the user doesn't have to enter their credentials every request.

## 2. What does the server store?
The server will store session data, such as the user's email and password or whatever information is used to identify the user. This data could also include permissions or metadata.

## 3. What does the client store?
The client will only store the session id that is provided by the server. This session id is typically stored in a cookie and is sent to the server with each request as a way to show that the user has already logged in.

## 4. Why does /profile fail before login?
/profile will fail before login because it is a protected route which requires a session. If there was no login, then no session exists yet and the server will not recognize the user.

## 5. Why does /profile work after login?
/profile will work after login because a session will have been created and the server would store user information. The client will now be sending a session id, usually in a cookie, with its requests. And since the server can recognize the user with that id, /profile will work.

## 6. Why does /profile fail again after logout?
Logging out causes /profile to fail again because it destroys the session on the server. This means that the client won't be able to send its session id and they won't be granted access to /profile.