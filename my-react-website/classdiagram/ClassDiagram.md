## Class Diagram

```mermaid
classDiagram
  direction TB

  namespace Components {
    class App {
      <<component>>
      +routes: Routes
      +render()
    }
    class Header {
      <<component>>
      +links: NavLink[]
      +render()
    }
    class Footer {
      <<component>>
      +render()
    }
    class Home {
      <<component>>
      +render()
    }
    class Aboutme {
      <<component>>
      +render()
    }
    class Hobbies {
      <<component>>
      +hobbies: Array
      +render()
    }
    class Contact {
      <<component>>
      -form: Object
      -sent: Boolean
      +handleChange()
      +handleSubmit()
      +reset()
    }
  }

  namespace LightTheme {
    class ThemeProvider {
      <<component>>
      -theme: String
      +toggleTheme()
    }
    class ThemeContext {
      <<context>>
      +theme: String
      +toggleTheme()
    }
    class ThemeToggle {
      <<component>>
      +render()
    }
  }

  namespace Models {
    class Hobby {
      <<model>>
      +title: String
      +text: String
      +image: String
      +alt: String
      +caption: String
      +border: Boolean
      +Hobby(title, text, image, alt, caption, border)
      +hasCaption(): Boolean
      +imageClasses(): String
    }
    class ContactForm {
      <<model>>
      +name: String
      +email: String
      +message: String
      +ContactForm(name, email, message)
      +update(field,