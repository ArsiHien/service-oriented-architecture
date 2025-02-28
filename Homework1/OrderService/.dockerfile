FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app
COPY pom.xml ./
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/OrderService-1.0-SNAPSHOT.jar OrderService-1.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-cp", "OrderService-1.0-SNAPSHOT.jar", "Main"]

CMD ["grpc"]
