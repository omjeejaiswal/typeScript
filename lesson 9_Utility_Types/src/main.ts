
// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Projects",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})


// Required and ReadOnly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true}

recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    kelly: {assign1: 76, assign2: 15},
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">


const score: AssignResult = {
    studentId: "k123", 
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "final project",
}

// Exculde and Extract 

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// returnType

//type newAssign = { title: string, points: number} 

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign) 

// parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

// awaited - helps us with the returnType of a promise

interface User{
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}














