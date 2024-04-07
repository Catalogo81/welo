const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type:String, required:true},
    username:  {type:String, required:true},
    password:  {type:String, required:true},
    userType:  {type:String, required:true}
})

const User = mongoose.model('User', userSchema, 'user')

const patientSchema = new Schema({
    user: {type:User},
    dateOfBirth: {type:Date, required:true},
    patientID: {type:String, required:true},
    patientHistory: {type:String, required:true}
})

const Patient = mongoose.model('Patient', patientSchema, 'patient')

const doctorSchema = new Schema({
    user: {type:User},
    position:{type:String, required:true}
})

const Doctor = mongoose.model('Doctor', doctorSchema, 'doctor')

const prescriptionSchema = new Schema({
    description: {type:String, required:true},
    date: {type:Date, default:Date.now, required:true}
})

const Prescription = mongoose.model('Prescription', prescriptionSchema, 'prescription')

const categorySchema = new Schema({
    categoryType: {type:String, required:true},
    description: {type:String, required:true}
})

const Category = mongoose.model('Category', categorySchema, 'category')


const mySchemas = {'User':User, 'Patient':Patient, 'Doctor':Doctor, 'Prescription':Prescription, 'Category':Category}

module.exports = mySchemas

