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
  background-color: ${primary2Color};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
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
  const [formData, setFormData] = useState({
    username: "",
    firsname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Container>
        <Box>
          <GlobalStyle whiteColor />
          <Title>Register</Title>
          <SubTitle>join and create projects🏆</SubTitle>
          <Form onSubmit={handleSubmit}>
            <InputUserName
              placeholder="Username"
              name="username"
              id="username"
              onChange={handleChange}
              value={formData.username}
            />
            <InputFirstName
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              onChange={handleChange}
              value={formData.firstname}
            />
            <InputLastName
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              onChange={handleChange}
              value={formData.lastname}
            />
            <InputEmail
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
            <InputPassword
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
            <Button>Register</Button>
          </Form>
            <SignUpText ignUpText>Alredy signed up?</SignUpText>
            <SignUpLink Link to="/Login">Login</SignUpLink> 
        </Box>
      </Container>
    </div>
  );
};

export default Register;
