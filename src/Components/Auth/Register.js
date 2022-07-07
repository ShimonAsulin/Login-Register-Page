import { useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../Utilities/Colors";
import Style from "../../Utilities/Styles";
import { createGlobalStyle } from "styled-components";

// Colors Palette
const {
  primary1Color,
  primary2Color,
  secondary1Color,
  secondary2Color,
  blackColor,
  whiteColor,
} = Colors;

const GlobalStyle = createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background-color: ${secondary1Color};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`;

const Box = styled.div`
  font-family: 'Montserrat', sans-serif;
    background-color: ${whiteColor};
    width: 250px;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    padding: .4em 1.3em;
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

const SignUp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em;

`
const SignUpText = styled.h5`
  color: ${primary1Color};
  text-align: center;
  font-weight: 500;
`;

const SignUpLink = styled.a`
  color: ${primary2Color};
  text-align: center;
  font-weight: 500;
  font-size: 0.8rem;
  text-decoration: none;
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
          <SubTitle>join projects and create projects of your own!</SubTitle>
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
          <SignUp>
            <SignUpText ignUpText>Alredy signed up?</SignUpText>
            <SignUpLink href="#">Log In</SignUpLink>
          </SignUp>
        </Box>
      </Container>
    </div>
  );
};

export default Register;