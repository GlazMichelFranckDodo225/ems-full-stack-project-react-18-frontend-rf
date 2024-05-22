import axios from "axios";

// Calling Spring Boot Backend REST APIs for Employee Resources
const REST_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// Calling Get All Employees REST API
export const listEmployees = () => axios.get(REST_API_BASE_URL);