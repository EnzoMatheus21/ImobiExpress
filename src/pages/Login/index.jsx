import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button"
import { Container, ContainerForm, Form, Label } from "./styles";

const Login = () => {
    return(
    <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com seu e-mail e senha!</p>
        <ContainerForm>
            <Form>
                <Label>E-mail</Label>
                <Input type="text" placeholder="Informe seu E-mail"/>
                <Label>Senha</Label>
                <Input type="text" placeholder="Informe sua Senha"/>
                <Button>Fazer Login</Button>
            </Form>
        </ContainerForm>
    </Container>
    )
}

export default Login;