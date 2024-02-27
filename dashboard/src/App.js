import React from "react";
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Tab
} from "@mui/material";
import { useEffect, useState } from "react";

import env from "./.env.json";

const HOST = env.HOST;

export function App() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedTab, setSelectedTab] = useState('products');

    async function fetchData(endpoint, setData) {
        try {
            const response = await fetch(`${HOST}${endpoint}`);
            const result = await response.json();
            setData(result.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData('/api/products', setProducts);
        fetchData('/api/users', setUsers);
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container maxWidth="lg">
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Products" value="products" />
                <Tab label="Users" value="users" />
            </Tabs>
            {selectedTab === 'products' && (
                <TableContainer component={Paper}>
                    <Table aria-label="products table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Discount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((prod) => {
                                return (
                                    <TableRow
                                        key={prod.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell>
                                            {prod.images && prod.images.length > 0 ? (
                                                <img src={`${HOST}/img/productos/${prod.images[0].file}`} alt="product" />
                                            ) : (
                                                "No image available"
                                            )}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {prod.nombre}
                                        </TableCell>
                                        <TableCell>{prod.precio}</TableCell>
                                        <TableCell>{prod.descuento}</TableCell>
                                    </TableRow>
                                );
                            })}

                            {products.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4}> No se encontraron productos</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            {selectedTab === 'users' && (
                <TableContainer component={Paper}>
                    <Table aria-label="users table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        {user.image && user.image.length > 0 ? (
                                            <img src={`${HOST}/img/avatars/${user.image}`} alt="avatar"/>
                                        ) : (
                                            <img src={`${HOST}/img/avatars/default.jpg`} alt="avatar"/>
                                        )}
                                    </TableCell>
                                    <TableCell>{user.nombre}</TableCell>
                                    <TableCell>{user.apellido}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))}
                            {users.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={2}>No users found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
}
