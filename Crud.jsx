import React from 'react'
import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const Crud = () => {
  

  const [alldata, setalldata] = useState([]);
  
  const [id, setid] = useState("");

  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const handlechange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };



  

  const saveData = (e) => {
    e.preventDefault();
    if (id != ""){
      const res= data.map((i,index) => {
        if( index == id){
          return { name,age,salary }; 
        }
        return i ;
      });
      setData(res);

    } else {
      setData([
        ...data,
        {name,age,salary}
      ])
    };
    setname("");
    setage("");
    setsalary("");
    setid("");

    
  };

  const editdata = (id) =>{
    let res = alldata.find((i,index) => index == id)
    setData(res)
     setname(res.name);
    setage(res.age);
    setsalary(res.salary);
    setid(id);

    setid(res)
    
  };
  
   const deldata = (id) =>{
    let res = alldata.filter((i,index) => index != id)
  setalldata(res)
    
  };




  
  return (
    <div>
     <Container>
      <Row>
        <Col>
         <Form onSubmit={saveData}>
         <Form.Group className="mb-3" >
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name'
          value={data.name}
  onChange={handlechange} />
      </Form.Group>

       <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" name='age'
          value={data.age}
  onChange={handlechange} />
        </Form.Group>

         <Form.Group className="mb-3" >
        <Form.Label>salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Salary" name='salary'
          value={data.salary}
  onChange={handlechange} />
        </Form.Group>
       
   
       
   

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="reset">
        Reset
      </Button>
      
    </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Age:</th>
          <th>Salary:</th>
          <th> Action
          </th>
        </tr>

      </thead>
      <tbody>
        {
          alldata.map((i,index) =>{
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
         <Button variant="primary" type="edit" onClick={()=>editdata(index)}>
        EDIT
      </Button>
      <Button variant="danger" type="delete" onClick={() => deldata(index) } >
        DELETE
      </Button>
                </td>
              </tr>
            )
          })
        }
       
      </tbody>
    </Table>

        </Col>
      </Row>
    </Container>

      
    </div>
  )
}

export default Crud
