export default class ContactForm {
  constructor({ name = "", email = "", message = "" } = {}) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  update(field, value) {
    return new ContactForm({ ...this.toObject(), [field]: value });
  }

  errors() {
    const errors = {};
    if (this.name.trim() === "") errors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(this.email)) errors.email = "Enter a valid email";
    if (this.message.trim() === "") errors.message = "Message is required";
    return errors;
  }

  isValid() {
    return Object.keys(this.errors()).length === 0;
  }

  reset() {
    return new ContactForm();
  }

  toObject() {
    return { name: this.name, email: this.email, message: this.message };
  }
}