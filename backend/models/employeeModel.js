import mongoose from 'mongoose'
const employeeSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{ 
        type:String, 
        required:true 
    },
  email:{ 
    type:String, 
    required:true, 
    unique:true 
    },
  mobileNo:{ 
    type:String, 
    required:true 
    },
  dob:{ 
    type:Date 
    },
  gender:{ 
    type:String, 
    enum: ['Male', 'Female'], 
    },
  address:{ 
    type:String 
    },
  country:{ 
    type:String 
    },
  city:{ 
    type:String 
    },
  skills:{ 
    type: [String], 
    enum: ['AWS', 'DevOps', 'Full Stack Developer', 'Middleware', 'QA-Automation', 'WebServices'] },
}, { timestamps: true });
const  Employee=new mongoose.model('Employee',employeeSchema)
export default Employee