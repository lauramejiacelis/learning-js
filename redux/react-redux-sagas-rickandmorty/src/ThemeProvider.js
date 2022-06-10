import { createContext, PureComponent } from 'react';

const ThemeContext = createContext();

export function withTheme(Component) {
  return function Wrapper(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => <Component {...props} {...context} />}
      </ThemeContext.Consumer>
    );
  };
}

class ThemeProvider extends PureComponent {
  state = {
    color: 'black',
    bgColor: 'white',
  };

  toggleTheme = () => {
    this.setState((state) =>
      state.color === 'black'
        ? { color: 'white', bgColor: '#24282f' }
        : { color: 'black', bgColor: 'white' }
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          color: this.state.color,
          bgColor: this.state.bgColor,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
