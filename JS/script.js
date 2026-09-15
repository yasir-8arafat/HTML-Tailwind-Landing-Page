// Problem - 1
/*function signature/sample */
function cashOut(money) {
    // You have to write your code here
    if (typeof (money) !== "number" || money < 0) {
        return "Invalid";
    }
    else {
        return (1.75 / 100) * money;
    }
}

// Problem - 2
/*function signature/sample */
function validEmail(email) {
    // You have to write your code here
    const startStr = [".", "-", "_", "+", "@"];
    let endStrArr = [];
    for (let i = email.length - 1; i >= email.length - 4; i--) {
        endStrArr.unshift(email[i]);
    }
    let endStr = endStrArr.join("");
    if (typeof (email) !== "string") {
        return "Invalid";
    }
    else if (startStr.includes(email[0])) {
        return false;
    }
    else if (!email.includes("@") || email.includes(" ") || endStr !== ".com") {
        return false;
    }
    else {
        return true;
    }
}


