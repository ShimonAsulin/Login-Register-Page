import { useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../Utilities/Colors";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// Colors Palette
const {primary1Color, primary2Color, secondary1Color,blackColor, whiteColor} = Colors

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
  font-family: 'Montserrat', sans-serif;
    background-color: ${whiteColor};
    width: 250px;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 1) 0px 0px 29px 0px;
    display: flex;
    flex-direction: column;
    padding: 1.4em;
`;

const Title = styled.h3`
  color: ${primary1Color};
  justify-content: flex-start;
  margin: .5em 0;
  font-weight: 600;
`;

const SubTitle = styled.h5`
  color: ${blackColor};
  justify-content: flex-start;
  margin: .3em 0;
  font-weight: 500;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  border: 1px solid ${primary1Color};
  text-indent: 5px;
  padding: 1em 0;
  margin: .7em 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;
const InputPassword = styled(Input)`

`;
const InputName = styled(Input)`
`;

const Button = styled.button`
  padding: .55em .6em;
  border: none;
  border-radius: 4px;
  background-color: ${primary1Color};
  color: ${whiteColor};
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: .7em auto 0;
  transition: color 0.5s ease;
`

const SignUp = styled.h5`
  color: ${primary1Color};
  text-align: center;
  font-weight: 500;
  margin: 2em 0 1em 0;
`

const SignUpLink = styled.a`
  color: ${secondary1Color};
  text-align: center;
  font-weight: 500;
  font-size: .8rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  };
`

const Login = () => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    })
  )}
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
}
  return (
    <div>
      <Container>
      <Box>
      <GlobalStyle whiteColor />
        <Title>Login</Title>
        <SubTitle>Login to get back to work!</SubTitle>
        <Form onSubmit={handleSubmit}>
          <InputName
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
           />
          <InputPassword
            placeholder="Password" type ="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
           />
          <Button>Login</Button>
        </Form>
        <SignUp>Haven't signed up yet?</SignUp>
        <SignUpLink href="#">
         <Link Link to="/Register">Register</Link>
        </SignUpLink>
      </Box>
      </Container>
    </div>
  );
};

export default Login;
