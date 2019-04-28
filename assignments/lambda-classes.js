// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(codeInfo) {
        super(codeInfo);
        this.specialty = codeInfo.specialty;
        this.favLanguage = codeInfo.favLanguage;
        this.catchPhrase = codeInfo.catchPhrase;
    }
    demo(subject) {
        `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const wayne = new student({
    name: 'Wayne',
    age: 27,
    location: 'Minnesota',
    gender: 'Male',
    className: 'WebPT6',
    favSubjects: ['CSS', 'HTML', 'JS Classes'],
    previousBackground: 'Project Manager'
});

const kieran = new Instructor({
    name: 'Kieran',
    age: 25,
    location: 'Unknown',
    gender: 'Male',
    catchPhrase: 'Those are just hot dogs',
    favLanguage: 'JavaScript',
    specialty: 'memes'
});

wayne.speak();
wayne.sprintChallenge('Javascript Fundamentals');
kieran.grade(wayne, 'JavaScript Classes');