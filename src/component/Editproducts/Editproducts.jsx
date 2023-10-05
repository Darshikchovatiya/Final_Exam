import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pro_updateAsync } from '../../services/Action/Product_Action';

function Editproducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {product} = useSelector(state => state);
    console.log(product,"product");


    const [inputList, setInputList] = useState(product);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputList({ ...inputList, [name]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(pro_updateAsync(inputList.id, inputList));

        navigate('/');

    }



    return (
        <>
            <Container>
                <Form className='mt-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Img</Form.Label>
                        <Form.Control placeholder="Enter Product Img" name='images' onChange={handleChange} value={inputList.images} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control placeholder="Enter Product Name" name='p_name' onChange={handleChange} value={inputList.p_name} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price" name='price' onChange={handleChange} value={inputList.price} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" placeholder="Enter Rating" name='rating' onChange={handleChange} value={inputList.rating} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Product Description" style={{ height: '120px', resize: "none" }} name='description' onChange={handleChange} value={inputList.description} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control placeholder="Enter Product Category" name='category' onChange={handleChange} value={inputList.category} />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Editproducts;