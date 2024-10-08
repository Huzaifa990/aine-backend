const express = require("express");
const cors = require("cors");
const Student = require("./Model/Students");
const Recipe = require("./Model/Recipes");
require("./DB/Conn");

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/students", async (req, res)=>{
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/students/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const students = await Student.findById(id);
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.patch("/students/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const students = await Student.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete("/students/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const students = await Student.findByIdAndDelete(id);
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/students", (req, res)=>{
    try {
        const addStudent = new Student(req.body);
        addStudent.save().then(()=>{
            res.status(200).send(addStudent);
        }).catch((error)=>{
        res.status(404).send(error);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})



app.get("/recipes", async (req, res)=>{
    try {
        const recipes = await Recipe.find();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/recipes", (req, res)=>{
    try {
        const addRecipes = new Recipe(req.body);
        addRecipes.save().then(()=>{
            res.status(200).send(addRecipes);
        }).catch((error)=>{
        res.status(404).send(error);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/recipes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Recipe.findById(id);
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
        
    }
})

app.patch("/recipes/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const students = await Recipe.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete("/recipes/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const students = await Recipe.findByIdAndDelete(id);
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.listen(PORT, ()=> {
    console.log("APi is running on PORT: "+PORT);
})