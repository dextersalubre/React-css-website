# Class Diagram: React Portfolio Website

```mermaid
classDiagram
direction TB

class main {
  <<entry>>
  createRoot()
}
class ThemeProvider {
  <<component>>
  -theme : string
  +toggleTheme()
  -getInitialTheme()
}
class ThemeContext {
  <<context>>
  +theme : string
  +toggleTheme()
}
class App {
  <<component>>
  Routes
}
class Header {
  <<component>>
}
class Footer {
  <<component>>
}
class ThemeToggle {
  <<component>>
  -toLight : boolean
}
class Home {
  <<component>>
}
class Aboutme {
  <<component>>
  id = about
}
class Hobbies {
  <<component>>
  -hobbies : array
  id = hobbies
}
class Contact {
  <<component>>
  -form : object
  -sent : boolean
  +handleChange()
  +handleSubmit()
  +reset()
}
class Hobby {
  <<model>>
  +title : string
  +text : string
  +image : string
  +alt : string
  +caption : string
  +border : boolean
  +hasCaption() boolean
  +imageClasses() string
}
class Theme {
  <<model>>
  +KEY$ : string
  +name : string
  +isLight() boolean
  +toggle() Theme
  +apply()
  +save()
  +load()$ Theme
}
class ContactForm {
  <<model>>
  +name : string
  +email : string
  +message : string
  +update() ContactForm
  +errors() object
  +isValid() boolean
  +reset() ContactForm
  +toObject() object
}

main --> ThemeProvider : renders
ThemeProvider --> App : wraps via BrowserRouter
ThemeProvider ..> ThemeContext : provides
ThemeToggle ..> ThemeContext : consumes
App *-- Header
App *-- Footer
App *-- Home : route /
App *-- Contact : route /contact
Header *-- ThemeToggle
Home *-- Aboutme
Home *-- Hobbies
Hobbies o-- Hobby : plain objects now
Contact ..> ContactForm : not yet used
ThemeProvider ..> Theme : not yet used
```

## Notes

- **Component tree:** `main` renders `ThemeProvider`, which wraps `App`. `App` contains `Header`, `Footer`, `Home` (route `/`) and `Contact` (route `/contact`). `Home` contains `Aboutme` and `Hobbies`; `Header` contains `ThemeToggle`.
- **Theme flow:** `ThemeProvider` provides `ThemeContext`; `ThemeToggle` consumes it.
- **Model classes:** `Hobby`, `Theme` and `ContactForm` exist as plain JS classes but are not yet used by the components. `Hobbies.jsx` uses object literals, `ThemeProvider.jsx` duplicates the logic in `Theme`, and `Contact.jsx` keeps its own `useState` instead of using `ContactForm`.
