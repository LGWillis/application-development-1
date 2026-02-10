1. Standard Error Format:

{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": [
      {
        "field": "fieldName",
        "issue": "Description of the problem"
      }
    ]
  }
}

2. 3 Error Cases

- 400 Bad Request - Invalid Input
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      {
        "field": "email",
        "issue": "Email is required"
      }
    ]
  }
}


- 404 Not Found — Resource Missing
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Task not found",
    "details": [
      {
        "field": "taskId",
        "issue": "No task exists with ID 999"
      }
    ]
  }
}


- 409 Conflict — State Conflict
{
  "error": {
    "code": "CONFLICT_ERROR",
    "message": "Resource conflict",
    "details": [
      {
        "field": "email",
        "issue": "A user with this email already exists"
      }
    ]
  }
}
