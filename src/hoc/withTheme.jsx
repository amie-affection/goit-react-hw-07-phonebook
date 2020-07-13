import React from "react";
import ThemeContext from "../themeContext/ThemeContext";

const withTheme = (WrappedComponent) => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <WrappedComponent
              {...props}
              theme={context.theme}
              themeConfig={context.themeConfig}
              toggleTheme={context.toggleTheme}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
