import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserModel from './models/userModel.js'
import Employee from './models/employeeModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const app=express()

app.use(cors())
app.use(express.json())

const JWT_SECRET='SECRET '

const intializeDBandServer=()=>{
    mongoose.connect('mongodb://localhost:27017/task')
    .then(
        app.listen(5000,()=>{
            console.log('Connected to DB and server is running on 5000')
        })
    )
}
intializeDBandServer()


//register

app.post('/register',async(req,res)=>{
    try{
        const{name,email,password}=req.body

        const existingUser=await UserModel.findOne({email})
        if(existingUser)
        {
            return res.status(400).json({error:"User already Registered with this email"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new UserModel({
            name,
            email,
            password:hashedPassword
        })
        await newUser.save();
        res.json({message:"User Registered Succesfully",data:newUser})
    }
    catch(e)
    {
        res.status(500).json({error:'Error Registering User',details:e})
    }
})

//login

app.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User email does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Password is not correct' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });

       return res.json({ message: 'Login Successful', token });
    } catch (e) {
        console.error(e);
      return  res.status(500).json({ error: 'Error logging in', details: e.message });
    }
})

//post employee data

app.post('/api/employees', async (req, res) => {
    try {
    //   console.log('Received data:', req.body); 
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.status(201).json({ message: 'Employee added successfully', data: newEmployee });
    } catch (err) {
      console.error('Error saving employee:', err); 
      res.status(500).json({ error: 'Failed to add Employee Data', details: err.message });
    }
  });
  
//get employees

app.get('/api/employees', async (req, res) => {
    try {
      const employees = await Employee.find({});
      res.status(200).json(employees);
    } catch (err) {
      console.error('Error fetching employees:', err.message);
      res.status(500).json({ error: 'Failed to fetch employees', details: err.message });
    }
  });
  
  //edit employee data
  
  app.put('/api/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', data: updatedEmployee });
    } catch (err) {
        console.error('Error updating employee:', err.message);
        res.status(500).json({ error: 'Failed to update employee', details: err.message });
    }
});

// Delete employee data
app.delete('/api/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        console.error('Error deleting employee:', err.message);
        res.status(500).json({ error: 'Failed to delete employee', details: err.message });
    }
});