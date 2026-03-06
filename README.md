# 📧 Email Form Validation

A Vanilla JavaScript project built to practice real-time form validation, DOM manipulation, and dynamic UI feedback. This is part of my JavaScript learning portfolio.

---

## 🚀 Live Demo

[View on Netlify](https://email-validations-miller.netlify.app/) ← *(replace with your Netlify URL)*

---

## 📌 About the Project

An email composition form that validates all fields in real time before allowing submission. The form requires a destination email, subject, and message body — with an optional CC field. As the user fills out the form, error messages appear and disappear dynamically, the submit button stays disabled until all fields are valid, and a spinner animation simulates the sending process before showing a success confirmation.

---

## 🧠 Concepts Practiced

### DOM Scripting
- Selecting elements with `querySelector`
- Creating and injecting alert elements dynamically (`createElement`, `appendChild`)
- Removing elements from the DOM (`.remove()`)
- Toggling CSS classes with `classList.add()`, `classList.remove()`
- Listening to `input` and `submit` events
- Blocking default form behavior with `event.preventDefault()`
- Reading form field values via `event.target`

### Form Validation
- Real-time validation on every keystroke using the `input` event
- Email format validation with a **Regular Expression (Regex)**
- Separate validation logic for optional fields (CC)
- Preventing form submission when required fields are empty or invalid
- Resetting the form and object state cleanly after submission

### JavaScript Vanilla

| Concept            | Where it's used                                                         |
| ------------------ | ----------------------------------------------------------------------- |
| Object Literal     | `email` object stores the form state (`email`, `asunto`, `mensaje`)     |
| `Object.values()`  | Checks if any field in the object is empty to enable/disable the button |
| `delete` operator  | Removes the optional `cc` key from the object on reset                  |
| Regular Expression | `/^\w+([.-_+]?\w+)*@\w+...$/` validates email format                    |
| `setTimeout`       | Simulates async email sending and auto-removes the success alert        |
| Arrow Functions    | Used in event listeners and `setTimeout` callbacks                      |
| `DOMContentLoaded` | Wraps all logic to ensure the DOM is ready before JS runs               |

---

## 🗂️ Project Structure

```
├── index.html
├── js/
│   └── app.js
├── dist/
│   ├── app.css       (Tailwind CSS compiled output)
│   └── spinner.css   (CSS keyframe spinner animation)
```

---

## ⚙️ How It Works

1. **Real-time validation** — every `input` event fires `validacionInputs()`, which checks if the field is empty or (for email fields) matches the regex pattern.
2. **Error alerts** — `mostrarAlerta()` injects a red `<p>` element below the invalid field; `limpiarAlerta()` removes it before showing a new one, preventing duplicates.
3. **Button state** — `comprobarEmail()` uses `Object.values(email).includes('')` to check if any required field is still empty, toggling the `disabled` state and `opacity-50` class on the submit button.
4. **Optional CC field** — validated separately; only triggers an error if it has content that isn't a valid email (it's not required to submit).
5. **Submit flow** — on submit, the spinner appears for 3 seconds, then hides and a green success alert is shown. That alert auto-removes after another 3 seconds.
6. **Reset** — both the `email` object and the HTML form are cleared together, keeping data and UI in sync.

---

## 🛠️ Technologies

- HTML5
- CSS3 + Tailwind CSS (compiled)
- JavaScript ES6+ (Vanilla — no frameworks or libraries)

---

## 📚 What I Learned

This project introduced me to the idea of keeping a **JavaScript object as the source of truth** for form state, separate from the DOM. Instead of reading input values directly at submit time, the object is updated on every keystroke and validated continuously. This pattern — syncing a data object with the UI in real time — is the same mental model behind frameworks like React and Vue, but built from scratch with pure JavaScript.

---

## 👨‍💻 Author

*Glenn Fernando Galicia Aviña* — [GitHub](https://github.com/GlennGalicia) · [LinkedIn](https://www.linkedin.com/in/glenn-galicia/)

> Part of my JavaScript learning journey. Feedback is welcome! 🙌
