import React, { useEffect } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_proAsync, pro_deleteAsync, singleproAsync } from '../../services/Action/Product_Action';
import { useNavigate } from 'react-router';

function ViewProducts() {

    const { products } = useSelector(state => state);
    // console.log(products);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const all_Data = () => {
        dispatch(get_all_proAsync());
    }

    const handleDelete = async (id) => {
        await dispatch(pro_deleteAsync(id));
        navigate('/');

    }

    const handleEdit = async (id,data) => {
        await dispatch(singleproAsync(id,data));
        navigate(`/editproducts/:${id}`);
    }


    useEffect(()=>{
        all_Data()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((pro_d) => {
                                    // console.log(pro_d,"pro");
                                    return (
                                        <tr>
                                            <td>
                                                <div style={{width: "100px", height: "100px"}}>
                                                    <img src={pro_d.images} alt="img" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                                </div>
                                            </td>
                                            <td>{pro_d.p_name}</td>
                                            <td>${pro_d.price}</td>
                                            <td>{pro_d.rating}</td>
                                            <td>{pro_d.category}</td>
                                            <td>{pro_d.description}</td>
                                            <td>
                                                <Button onClick={()=>handleEdit(pro_d.id, pro_d)}>Edit</Button>
                                                <Button className='btn-danger ms-2' onClick={()=>handleDelete(pro_d.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default ViewProducts;