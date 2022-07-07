import { useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../Utilities/Colors";
import Style from "../../Utilities/Styles";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// Colors Palette
const {
  primary1Color,
  primary2Color,
  secondary1Color,
  whiteColor,
} = Colors;

const GlobalStyle = createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  ${Style.Container}
  background-color: ${primary2Color};  
`;

const Box = styled.div`
  ${Style.Box} 
`;

const Title = styled.h3`
  ${Style.Title}
`;

const SubTitle = styled.h5`
  ${Style.SubTitle}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  ${Style.Input}
`;
const InputUserName = styled(Input)``;
const InputFirstName = styled(Input)``;
const InputLastName = styled(Input)``;
const InputEmail = styled(Input)``;
const InputPassword = styled(Input)``;

const Button = styled.button`
  ${Style.Button}
  background-color: ${primary1Color};
  color: ${whiteColor};
`;

const SignUpText = styled.h5`
  ${Style.SignUpText}
`;

const SignUpLink = styled(Link)`
  color:${secondary1Color};
  ${Style.SignUpLink}
`;



const Register = () => {
  const [formSignUpData, setformSignUpData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setformSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formSignUpData);
  };

  return (
    <div>
      <Container>
        <Box>
          <GlobalStyle whiteColor />
          <Title>Register</Title>
          <SubTitle>create and join to projects🏆</SubTitle>
          <Form onSubmit={handleSubmit}>
            <InputUserName
              placeholder="Username"
              name="username"
              id="username"
              required
              onChange={handleChange}
              value={formSignUpData.username}
            />
            <InputFirstName
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              required
              onChange={handleChange}
              value={formSignUpData.firstname}
            />
            <InputLastName
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              onChange={handleChange}
              required
              value={formSignUpData.lastname}
            />
            <InputEmail
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              type="email"
              required
              value={formSignUpData.email}
            />
            <InputPassword
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
              value={formSignUpData.password}
            />
            <Button>Register</Button>
          </Form>
            <SignUpText ignUpText>Alredy signed up?</SignUpText>
            <SignUpLink to="/Login">Login</SignUpLink> 
        </Box>
      </Container>
    </div>
  );
};

export default Register;
