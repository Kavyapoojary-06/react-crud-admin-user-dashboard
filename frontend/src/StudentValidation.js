function validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.name === "") {
        error.name = "Name should not be empty"
    }

    if (values.email === "") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect"
    }

    if (values.usn === "") {
        error.usn = "USN should not be empty"
    }

    if (values.age === "") {
        error.age = "Age should not be empty"
    }

    return error;
}
export default validation;
