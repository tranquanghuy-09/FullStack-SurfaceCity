FROM gradle:8.1.1-jdk17 AS build
WORKDIR /home/gradle/project
COPY . .
# RUN mvn clean package -DskipTests
RUN gradle clean build -x test

FROM openjdk:17-ea-18-jdk-slim-buster
COPY --from=build /home/gradle/project/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]