import { useState } from "react";
import styled from "styled-components/macro";
import Style from "../../Utilities/Styles";
import Colors from "../../Utilities/Colors";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// Colors Palette
const {primary1Color, primary2Color, secondary1Color, whiteColor} = Colors

const GlobalStyle = createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
  }
`;


const Container = styled.div`
  background-color: ${secondary1Color};
  ${Style.Container};
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

const InputPassword = styled.input`
  ${Style.Input}
`;
const InputName = styled.input`
  ${Style.Input}
`;

const Button = styled.button`
  background-color: ${primary1Color};
  color: ${whiteColor};
  ${Style.Button};
`;

const SignUpText = styled.h5`
  ${Style.SignUpText};
`;

const SignUpLink = styled(Link)`
  color: ${primary2Color};
  ${Style.SignUpLink};
`;

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
        <SignUpText>Haven't signed up yet?</SignUpText>
         <SignUpLink to="/Register">Register</SignUpLink>
      </Box>
      </Container>
    </div>
  );
};

export default Login;
