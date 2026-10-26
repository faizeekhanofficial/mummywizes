import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import { Button, Table, Container } from 'react-bootstrap'



const todo = "https://6aa2ab8dccb3db9689a6df3f.mockapi.io/todo"

const App = () => {
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [editId, setEditId] = useState(null)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState('')

    const getTodo = async () => {

        const res = await fetch(todo)
        const result = await res.json()
        setData(result);
    }

    useEffect(() => {
        getTodo()
    }, [])


    const handleInput = (e) => {
        const { value } = e.target
        setValue(value)

        setError(false)
    }

    const handleSearch = (e) => {
        const { value } = e.target
        setSearch(value)
    }


    const submitHandler = async (e) => {
        e.preventDefault()

        if (value.trim() === "") {
            setError(true)
            return
        }

        if (editId !== null) {
            const res = await fetch(`${todo}/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: value,
                    progress: "Pending",
                    status: "Inactive"
                })
            })

            const updatedTodo = await res.json()

            const updated = data.map((item) => {
                if (item.id === editId) {
                    return updatedTodo
                }

                return item
            })

            setData(updated)
            setValue("")
            setEditId(null)
            console.log(data);


        } else {

            const res = await fetch(todo, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: value,
                    progress: "Pending",
                    status: "Inactive"
                })
            })

            const newTodo = await res.json()

            setData([...data, newTodo])
            setValue("")
        }
    }

    const deleteHandler = async (id) => {

        await fetch(`${todo}/${id}`, {
            method: "DELETE"
        })

        const newDlt = data.filter((item) => {
            return item.id !== id
        })

        setData(newDlt)

    }



    const markHandler = async (id) => {

        const res = await fetch(`${todo}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                progress: "Completed"
            })
        })

        const updatedTodo = await res.json()

        const newMark = data.map((item) => {
            if (item.id === id) {
                return updatedTodo
            }

            return item
        })

        setData(newMark)


    }


    const activeHandler = async (value) => {

        const status = value.select === "Active" ? "Inactive" : "Active"


        const res = await fetch(`${todo}/${value.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: status
            })
        })

        const updatedTodo = await res.json()

        const newActive = data.map((item) => {
            if (item.id === value.id) {

                alert(
                    `This task is ${status === "Active" ? "Deactivate" : "Active"}`
                )

                return updatedTodo
            }

            return item
        })

        setData(newActive)


    }


    const editHandler = (id) => {
        const newEdit = data.find((item) => item.id === id)

        setValue(newEdit.title)
        setEditId(id)
    }

    console.log(data)




    const filteredData = data.filter((item) =>
        item.title.includes(search))




    return (
        <div className='main-tod-wrappar'>
            <Container>
                <div >
                    <h1 className='todo-h1'>My First Todo List</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Title" value={value} onChange={handleInput} className='mb-3' />
                            {
                                error && <span>This Field Is Required</span>
                            }
                            <input type="text" className="form-control" placeholder="Search Todo..." value={search} onChange={handleSearch} />
                        </Form.Group>
                        <Button type='submit'>{editId ? "Updated" : "Submit"}</Button>
                    </Form>
                    <Table className='mt-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Progress</th>
                                <th>Select</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.progress}</td>
                                        <td> {item.status}
                                            {item.status === "Active" &&
                                                (
                                                    <span style={{
                                                        marginLeft: "5px",
                                                        display: "inline-block",
                                                        width: "10px",
                                                        height: "10px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "green",
                                                        marginRight: "8px"
                                                    }}></span>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <Button onClick={() => editHandler(item.id)}>Edit</Button>
                                            <Button className='mx-3' onClick={() => deleteHandler(item.id)}>Delete</Button>
                                            <Button disabled={item.progress === "Completed" ? true : false} onClick={() => markHandler(item.id)}>Mark Done</Button>
                                            <Button className='ms-3' onClick={() => activeHandler(item)}>{item.status === "Active" ? "Inactive" : "Active"}</Button>


                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>
            </Container >
        </div >
    )
}

export default App












