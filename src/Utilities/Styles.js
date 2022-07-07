import Colors from "./Colors";

const {
  primary1Color,
  // primary2Color,
  secondary1Color,
  // secondary2Color,
  blackColor,
  whiteColor,
} = Colors;

// Login - Register. is too much equals, so i use the style from here instead
const Styles = {
  Container: `
    background-color: ${secondary1Color};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Box: `
    font-family: 'Montserrat', sans-serif;
    background-color: ${whiteColor};
    width: 250px;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    padding: 1.4em;
  `,
  Title: `
    color: ${primary1Color};
    justify-content: flex-start;
    margin: .5em 0;
    font-weight: 600;
  `,
  SubTitle: `
    color: ${blackColor};
    justify-content: flex-start;
    margin: 0.3em 0;
    font-weight: 500;
  `,
  Input: `
    font-family: "Karla", sans-serif;
    border-radius: 5px;
    border: 1px solid ${primary1Color};
    text-indent: 5px;
    padding: 1em 0;
    margin: 0.7em 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  `,
  Button: `
    padding: 0.55em 0.6em;
    border: none;
    border-radius: 4px;
    background-color: ${primary1Color};
    color: ${whiteColor};
    font-weight: 500;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    margin: 0.7em auto 0;
    &:hover {
      color: ${secondary1Color};
    }
    transition: color 0.5s ease;
  `
};

export default Styles;
