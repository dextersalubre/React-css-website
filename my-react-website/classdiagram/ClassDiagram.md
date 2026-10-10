# Class Diagram: My React Website

Class diagram of the whole website: the React components, the light theme feature, and the model classes in `src/models`. It uses Mermaid, so it shows as a diagram on GitHub and in most Markdown viewers.

## Diagram

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
      +update(field, value): ContactForm
      +errors(): Object
      +isValid(): Boolean
      +reset(): ContactForm
      +toObject(): Object
    }
    class Theme {
      <<model>>
      +name: String
      +KEY$: String
      +Theme(name)
      +isLight(): Boolean
      +toggle(): Theme
      +apply(root): void
      +save(): void
      +load()$: Theme
    }
  }

  ThemeProvider *-- App : wraps
  ThemeProvider ..> ThemeContext : provides
  App *-- Header
  App *-- Footer
  App *-- Home
  App *-- Contact
  Home *-- Aboutme
  Home *-- Hobbies
  Header *-- ThemeToggle
  ThemeToggle ..> ThemeContext : reads
```

## Notation

| Symbol | Meaning |
|--------|---------|
| `+` | public member |
| `-` | private member (React state) |
| `$` | static member (belongs to the class) |
| `*--` | composition: the parent renders the child |
| `..>` | dependency: one class uses another |

## Classes

**Components** (`src/`)

- `App`: root layout. Holds the routes and renders `Header`, `Footer`, `Home` and `Contact`.
- `Header`: site title and navigation. Contains `ThemeToggle`.
- `Footer`: copyright line.
- `Home`: the home page. Renders `Aboutme` and `Hobbies`.
- `Aboutme`: the About Me section with the photo.
- `Hobbies`: the list of hobbies with images and captions.
- `Contact`: the contact form. Keeps the form values and a "sent" flag.

**Light theme** (`src/`)

- `ThemeProvider`: holds the current theme (dark by default), saves it in `localStorage`, and sets `data-theme` on the page.
- `ThemeContext`: shares the theme and `toggleTheme()` with the rest of the app.
- `ThemeToggle`: the Light/Dark button in the header.

**Models** (`src/models`)

- `Hobby`: one hobby entry (title, text, image, alt text, caption, border).
- `ContactForm`: the contact form data, with validation and reset.
- `Theme`: the light/dark theme, with toggle, apply, save and load.

The models are not imported by the components yet, so the diagram has no lines between them and the components.
