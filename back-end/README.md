# api-store
This project is a user-friendly API designed for performing CRUD (Create, Read, Update, Delete) operations on both Users and Products. It serves as a practical solution for the 'Banco de Dados II' course at the Universidade Católica de Pernambuco, offering seamless data management capabilities.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the API, follow the instructions below.

### Prerequisites

- Java Development Kit (JDK) 17
- SQL Server (or any other supported relational database)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/gabrielle-1/api-store.git

2. Navigate to the project directory:

   ```shell
   cd api-store
   
3. Build the project using Maven:

   ```shell
   mvn clean install
   
4. Configure the database connection by modifying the application.properties file:

   ```shell
   spring.datasource.url=jdbc:mysql://localhost:3306/store_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   
5. Run the application:

   ```shell
   mvn spring-boot:run


By default, the API will be available at http://localhost:8080.


### Usage


### API Documentation
Its in progress.
The API documentation is automatically generated using Swagger. Once the application is running, you can access the Swagger UI by visiting http://localhost:8080/swagger-ui/index.html#/ in your browser. It provides an interactive interface to explore and test the API endpoints.

### Contributing
Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary modifications.
4. Commit your changes and push the branch.
5. Submit a pull request explaining your changes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

```css
This Markdown-formatted README includes the table of contents and headings for each section, making it easier to navigate and read the document. Feel free to use and modify this template according to your project's needs.
