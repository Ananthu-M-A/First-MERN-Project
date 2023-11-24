import Table from 'react-bootstrap/Table';
import { PencilFill, PersonAdd, PersonDash, Search } from 'react-bootstrap-icons';
import { Col, InputGroup, Form, Button } from 'react-bootstrap';

const AdminHomePage = () => {

    return (
        <>
            <h1 className='text-center m-3 p-3'>User Data</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    className='text-dark'
                />
                <Button variant="outline-primary" id="button-addon2">
                    <Search /><strong> Search</strong>
                </Button>
            </InputGroup>
            <Table striped bordered hover variant="dark">
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className='text-center'>
                            <Col>
                                <button className='btn btn-outline-primary'><strong>Edit User</strong><PencilFill /></button>
                                <button className='btn btn-outline-primary'><strong>Delete User</strong><PersonDash /> </button>
                            </Col>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-center'>1</td>
                        <td>
                            <Form.Group className='my-2' controlId='name'>
                                <Form.Control
                                    placeholder='Enter Name...'
                                ></Form.Control>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className='my-2' controlId='email'>
                                <Form.Control
                                    placeholder='Enter Email...'
                                ></Form.Control>
                            </Form.Group>
                        </td>
                        <td className='text-center'>
                            <Col className='mt-2'>
                                <button className='btn btn-outline-primary'><strong>Add User</strong><PersonAdd /></button>
                            </Col>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};
export default AdminHomePage;