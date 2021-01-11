# docker-example

A task:
Make 2 backend services (in the simplest way), where
1. Service (and only 1) A will be available so that it can be accessed via HTTP (REST-API)
2. Service B should not be accessible from outside
3. Service A, when processing a request from a user, must go to the API to service B, take an answer from him -> "process" and give an answer to the user
4. Services must be built via docker-compose
5. For these services, you need to describe the Dockerfile, but it should be 1 and not a separate Dockerfile for each
6. Dockerfile should be optimized for build speed, and produce minimal image size