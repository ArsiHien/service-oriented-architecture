FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

# Install necessary build tools
RUN apt update && apt install -y \
	wget \
	build-essential \
	autoconf \
	libtool \
	pkg-config
	
# Cài Apache Thrift
RUN apt update && apt install -y wget \
	&& wget http://downloads.apache.org/thrift/0.21.0/thrift-0.21.0.tar.gz \
	&& tar -xvzf thrift-0.21.0.tar.gz \
	&& cd thrift-0.21.0 \
	&& ./configure && make -j$(nproc) && make install \
	&& cd .. && rm -rf thrift-0.21.0*

# Copy and build the application
COPY pom.xml ./
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/OrderService-1.0-SNAPSHOT.jar OrderService-1.0-SNAPSHOT.jar

COPY .env /app/.env
ENTRYPOINT ["java", "-jar", "OrderService-1.0-SNAPSHOT.jar", "Main"]
