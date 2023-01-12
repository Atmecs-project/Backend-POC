const Employee = require("../model/model_employee");

const getAllEmployees = async (req, res, next) => {
    let employees;
    try {
        employees = await Employee.find();
    } catch (err) {
        console.log(err);
    }

    if (!employees) {
        return res.status(404).json({ message: "No Employees Found" })
    }
    return res.status(200).json({ employees });
};

const addEmployee = async (req, res, next) => {
    const { name, designation, email, mobile, role,userid,password, status } = req.body;
    let employee;
    try {
        employee = new Employee({
            name,
            designation,
            email,
            mobile,
            role,
            userid,
            password,
            status
        });
        await employee.save();

    } catch (err) {
        console.log(err);
    }

    if (!employee) {
        return res.status(500).json({ message: "Unable add new employee" });
    }
    return res.status(201).json({ employee });
};

const getEmpById = async (req, res, next) => {
    const id = req.params.id;
    let employee;
    try {
        // employee=await Employee.findOne({_id:id});
        employee = await Employee.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!employee) {
        return res.status(404).json({ message: "No employee found" });
    }
    return res.status(200).json({ employee });

};

const updateEmpById = async (req, res, next) => {
    const id = req.params.id;
    const { name, designation, email, mobile, role,userid,password, status } = req.body;
    let employee;
    try {
        employee = await Employee.findByIdAndUpdate(id, {
            name, designation, email, mobile, role,userid, password, status
        });
        employee = await employee.save();
    } catch (err) {
        console.log(err);
    }

    if (!employee) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(200).json({ employee });
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.getEmpById = getEmpById;
exports.updateEmpById = updateEmpById;